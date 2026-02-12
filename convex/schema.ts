import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Memo storage - the core of Clawderous
  memos: defineTable({
    userId: v.string(),           // User identifier
    email: v.string(),             // Source email
    command: v.string(),          // /memo, /blog, /run, etc.
    title: v.optional(v.string()), // Optional title
    content: v.string(),          // Main content (markdown)
    url: v.optional(v.string()),  // Public URL (if published)
    createdAt: v.number(),        // Timestamp
    metadata: v.optional(v.object()), // Extra data (attachments, etc.)
  })
    .index("by_user", ["userId"])
    .index("by_email", ["email"])
    .index("by_created", ["createdAt"]),

  // User configurations
  configs: defineTable({
    userId: v.string(),
    email: v.string(),
    defaultDestination: v.string(), // convex, r2, gist, etc.
    webhookUrl: v.optional(v.string()), // For AgentMail
    imapConfig: v.optional(v.object()), // For custom IMAP
    destinations: v.array(v.object()), // Where to send outputs
    createdAt: v.number(),
  }).index("by_user", ["userId"]),

  // Command history for audit
  commands: defineTable({
    userId: v.string(),
    email: v.string(),
    command: v.string(),
    input: v.string(),
    output: v.optional(v.string()),
    status: v.string(), // pending, success, error
    createdAt: v.number(),
  }).index("by_user", ["userId"]),
});
