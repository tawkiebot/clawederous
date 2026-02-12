#!/usr/bin/env node
/**
 * Quick test for AgentMail API
 */

import { agentmail, sendEmail, getMessages } from './src/agentmail';

async function test() {
  console.log('🧪 Testing AgentMail API...\n');

  try {
    // List inboxes
    console.log('1. Listing inboxes...');
    const inboxes = await agentmail.listInboxes();
    console.log(`   Found ${inboxes.length} inbox(es)`);
    for (const inbox of inboxes) {
      console.log(`   - ${inbox.email}`);
    }

    // Get messages
    console.log('\n2. Checking messages in tawkie@agentmail.to...');
    const messages = await getMessages('tawkie@agentmail.to');
    console.log(`   Found ${messages.length} message(s)`);
    for (const msg of messages.slice(0, 5)) {
      console.log(`   - ${msg.subject} from ${msg.from}`);
    }

    // Send test email
    console.log('\n3. Sending test email...');
    const result = await sendEmail(
      'tawkie@agentmail.to',
      '/ping - Clawederous MVP Test',
      'Hello from Clawederous! 🦞\n\nThis is a test of the AgentMail API.'
    );
    console.log(`   ✅ Sent: ${result.message_id}`);

    console.log('\n🎉 All tests passed!');
  } catch (error) {
    console.error('\n❌ Test failed:', (error as Error).message);
    process.exit(1);
  }
}

test();
