/**
 * /memo Feature Test Suite
 * 
 * Tests the command parser, storage handler, and response builder
 * for the Clawderous /memo feature.
 * 
 * Run with: npx ts-node landing/test/memo.test.ts
 */

import { parseEmailToCommand, formatCommand, type Command } from "../parse/command";
import { MemoHandler, getHandler } from "../handlers/commands";

// Mock Convex context for testing
function createMockContext() {
  const memos: Array<{
    id: string;
    userId: string;
    email: string;
    command: string;
    title?: string;
    content: string;
    url?: string;
    createdAt: number;
  }> = [];
  
  let nextId = 1;

  return {
    userId: "test-user-123",
    email: "test@example.com",
    runMutation: async (name: string, args: Record<string, unknown>): Promise<string> => {
      if (name === "memos:create") {
        const id = `memo_${nextId++}`;
        const memo = {
          id,
          userId: args.userId as string,
          email: args.email as string,
          command: args.command as string,
          title: args.title as string | undefined,
          content: args.content as string,
          url: `https://tawkie.dev/memo/${id}`,
          createdAt: args.createdAt as number,
        };
        memos.push(memo);
        return id;
      }
      throw new Error(`Unknown mutation: ${name}`);
    },
    runQuery: async (name: string, args: Record<string, unknown>) => {
      if (name === "memos:byUser") {
        return memos.filter((m) => m.userId === args.userId);
      }
      throw new Error(`Unknown query: ${name}`);
    },
    runAction: async () => {
      return "Action completed";
    },
  };
}

// Test utilities
interface TestResult {
  name: string;
  passed: boolean;
  error?: string;
}

function test(name: string, fn: () => void | Promise<void>): TestResult {
  try {
    fn();
    return { name, passed: true };
  } catch (e) {
    return { name, passed: false, error: String(e) };
  }
}

async function testAsync(name: string, fn: () => Promise<void>): Promise<TestResult> {
  try {
    await fn();
    return { name, passed: true };
  } catch (e) {
    return { name, passed: false, error: String(e) };
  }
}

// Test suite
async function runTests() {
  console.log("🧪 Running /memo Feature Tests\n");
  console.log("=".repeat(50));
  
  const results: TestResult[] = [];

  // === Command Parser Tests ===
  console.log("\n📋 Command Parser Tests\n");

  // Test 1: /memo with title and content
  results.push(test("Should parse /memo with title in subject", () => {
    const { command, error } = parseEmailToCommand(
      "/memo My Shopping List",
      "Milk, eggs, bread, coffee"
    );
    
    if (error) throw new Error(`Unexpected error: ${error}`);
    if (!command) throw new Error("Command is null");
    if (command.command !== "/memo") throw new Error(`Expected /memo, got ${command.command}`);
    if (command.title !== "My Shopping List") throw new Error(`Expected title "My Shopping List", got "${command.title}"`);
    if (command.content !== "Milk, eggs, bread, coffee") throw new Error(`Content mismatch`);
  }));

  // Test 2: /memo without title (first line as title)
  results.push(test("Should parse /memo without explicit title", () => {
    const { command, error } = parseEmailToCommand(
      "/memo",
      "Remember to call mom"
    );
    
    if (error) throw new Error(`Unexpected error: ${error}`);
    if (!command) throw new Error("Command is null");
    if (command.command !== "/memo") throw new Error(`Expected /memo, got ${command.command}`);
    if (command.title !== "Remember to call mom") throw new Error(`Expected first line as title`);
    if (command.content !== "") throw new Error(`Content should be empty when first line is title`);
  }));

  // Test 3: /memo with multiline content
  results.push(test("Should parse /memo with multiline content", () => {
    const { command, error } = parseEmailToCommand(
      "/memo Project Ideas",
      "1. Build a robot\n2. Learn TypeScript\n3. Plant a garden"
    );
    
    if (error) throw new Error(`Unexpected error: ${error}`);
    if (!command) throw new Error("Command is null");
    if (command.command !== "/memo") throw new Error(`Expected /memo, got ${command.command}`);
    if (command.title !== "Project Ideas") throw new Error(`Title mismatch`);
    if (!command.content.includes("1. Build a robot")) throw new Error("Content should include all lines");
  }));

  // Test 4: No command defaults to memo
  results.push(test("Should default to memo when no command specified", () => {
    const { command, error } = parseEmailToCommand(
      "Quick thought without command",
      "Just a random idea that came to mind"
    );
    
    if (error) throw new Error(`Unexpected error: ${error}`);
    if (!command) throw new Error("Command is null");
    if (command.command !== "/memo") throw new Error(`Expected /memo as default, got ${command.command}`);
  }));

  // Test 5: /blog command
  results.push(test("Should parse /blog command", () => {
    const { command, error } = parseEmailToCommand(
      "/blog My First Post",
      "This is the content of my blog post."
    );
    
    if (error) throw new Error(`Unexpected error: ${error}`);
    if (!command) throw new Error("Command is null");
    if (command.command !== "/blog") throw new Error(`Expected /blog, got ${command.command}`);
    if (command.title !== "My First Post") throw new Error(`Title mismatch`);
  }));

  // Test 6: /run command
  results.push(test("Should parse /run command with args", () => {
    const { command, error } = parseEmailToCommand(
      "/run deploy-prod",
      "--env prod --region us-west"
    );
    
    if (error) throw new Error(`Unexpected error: ${error}`);
    if (!command) throw new Error("Command is null");
    if (command.command !== "/run") throw new Error(`Expected /run, got ${command.command}`);
    if (command.workflow !== "deploy-prod") throw new Error(`Workflow mismatch`);
    if (!command.args?.includes("env")) throw new Error("Should parse --env arg");
  }));

  // === Handler Tests ===
  console.log("\n🔧 Handler Tests\n");

  // Test 7: MemoHandler execution
  results.push(await testAsync("Should execute MemoHandler and store memo", async () => {
    const ctx = createMockContext() as any;
    const handler = new MemoHandler();
    
    const result = await handler.execute({
      command: "/memo",
      title: "Test Memo",
      content: "This is test content",
    }, ctx);
    
    if (!result.success) throw new Error(`Handler failed: ${result.message}`);
    if (!result.message.includes("Memo saved")) throw new Error(`Unexpected message: ${result.message}`);
    if (!result.url) throw new Error("Missing URL in response");
  }));

  // Test 8: Handler factory returns correct handler
  results.push(test("Should return correct handler from factory", () => {
    const memoHandler = getHandler({ command: "/memo", content: "test" });
    if (!(memoHandler instanceof MemoHandler)) throw new Error("Expected MemoHandler");
  }));

  // === Format Command Tests ===
  console.log("\n✨ Format Command Tests\n");

  // Test 9: Format /memo with title
  results.push(test("Should format /memo with title", () => {
    const formatted = formatCommand({
      command: "/memo",
      title: "Shopping List",
      content: "Milk, eggs",
    });
    
    if (!formatted.includes("📝")) throw new Error("Should include memo emoji");
    if (!formatted.includes("Shopping List")) throw new Error("Should include title");
  }));

  // Test 10: Format /memo without title
  results.push(test("Should format /memo without title", () => {
    const formatted = formatCommand({
      command: "/memo",
      content: "Quick note",
    });
    
    if (!formatted.includes("📝")) throw new Error("Should include memo emoji");
    if (formatted.includes("undefined")) throw new Error("Should not include undefined title");
  }));

  // Print results
  console.log("\n" + "=".repeat(50));
  console.log("\n📊 Test Results\n");
  
  const passed = results.filter(r => r.passed).length;
  const failed = results.filter(r => !r.passed).length;
  
  results.forEach((result, i) => {
    const status = result.passed ? "✅" : "❌";
    console.log(`${status} ${i + 1}. ${result.name}`);
    if (!result.passed && result.error) {
      console.log(`   Error: ${result.error}`);
    }
  });
  
  console.log(`\n${"=".repeat(50)}`);
  console.log(`\n📈 Summary: ${passed} passed, ${failed} failed\n`);
  
  if (failed > 0) {
    process.exit(1);
  }
}

// Run if executed directly
runTests().catch((err) => {
  console.error("Test runner error:", err);
  process.exit(1);
});
