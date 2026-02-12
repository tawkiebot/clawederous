#!/usr/bin/env node
/**
 * Quick test for AgentMail API using the official SDK
 */

import { AgentMailClient } from 'agentmail';

const apiKey = process.env.AGENTMAIL_API_KEY || '';
const inbox = 'tawkie@agentmail.to';

async function test() {
  console.log('🧪 Testing AgentMail SDK...\n');

  const client = new AgentMailClient({ apiKey });

  try {
    // List inboxes
    console.log('1. Listing inboxes...');
    const inboxes = await client.inboxes.list();
    console.log(`   Found ${inboxes.inboxes.length} inbox(es)`);
    for (const ib of inboxes.inboxes) {
      console.log(`   - ${ib.inboxId}`);
    }

    // Get messages
    console.log('\n2. Checking messages...');
    const messages = await client.inboxes.messages.list(inbox);
    console.log(`   Found ${messages.messages.length} message(s)`);
    for (const msg of messages.messages.slice(0, 5)) {
      console.log(`   - ${msg.subject} from ${msg.from}`);
    }

    // Send test email
    console.log('\n3. Sending test email...');
    const result = await client.inboxes.messages.send(inbox, {
      to: 'tawkie@agentmail.to',
      subject: '/ping - Clawederous MVP Test',
      text: 'Hello from Clawederous! 🦞\n\nThis is a test of the AgentMail SDK.'
    });
    console.log(`   ✅ Sent: ${result.messageId}`);

    console.log('\n🎉 All tests passed!');
  } catch (error) {
    console.error('\n❌ Test failed:', (error as Error).message);
    process.exit(1);
  }
}

test();
