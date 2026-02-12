# Clawderous

**📧 Email-to-anything for OpenClaw. Claude on Claw, via Email.**

[![ClawHub](https://img.shields.io/badge/ClawHub-v0.1.0-blue)](https://clawhub.com)
[![OpenClaw](https://img.shields.io/badge/OpenClaw-Ready-green)](https://openclaw.ai)

> "Posterous let you blog by emailing. Clawderous lets you do *anything* by emailing your agent."

---

## Quick Start

```bash
# Install
clawhub install clawderous

# Email your claw
To: clawederous@agentmail.to
Subject: /memo Hello World
Body: This is my first Clawderous memo!
```

Response:
```
✅ Memo saved!
📝 Hello World
🔗 https://tawkie.dev/memo/abc123
```

---

## Commands

| Command | Description | Example |
|---------|-------------|---------|
| `/memo` | Quick note | `/memo Shopping list` |
| `/blog` | Blog post | `/blog My Thoughts` |
| `/run` | Execute workflow | `/run backup` |
| `/reply` | Send reply | `/reply person@email.com` |
| `/status` | View stats | `/status` |
| `/help` | Get help | `/help` |

---

## Setup

### Prerequisites

- OpenClaw installed
- Convex account (for memo storage)
- AgentMail account at [agentmail.to](https://agentmail.to)

### Get an AgentMail Inbox

```bash
# 1. Go to console.agentmail.to
# 2. Create an account
# 3. Get your API key
# 4. Create an inbox (e.g., "claw")
```

### Installation

```bash
clawhub install clawderous
```

### Configuration

**Environment variable:**
```bash
export AGENTMAIL_API_KEY=your_api_key_here
```

**Or in code:**
```typescript
import { clawderous } from "clawderous";

await clawderous.configure("your_api_key");
const email = await clawderous.getInbox();
// Now you have: clawederous@agentmail.to
```

**Start polling:**
```typescript
await clawderous.start();
// Your claw is now listening for emails!
```

---

## Architecture

```
User Email ──▶ Clawderous Engine ──▶ Output
                 │
     ┌──────────┼──────────┐
     ▼          ▼          ▼
   /memo      /blog      /run
     │          │          │
     ▼          ▼          ▼
  Convex     Blog      Workflows
```

---

## BYO (Bring Your Own)

Clawderous is designed around BYO infrastructure:

| Component | Options |
|-----------|---------|
| Email | AgentMail, Gmail, Proton, custom IMAP |
| Intelligence | Claude (via OpenClaw), your model |
| Storage | Convex, R2, GitHub Gist |
| Workflows | Your OpenClaw workflows |

---

## Why Clawderous?

1. **Universal** - Everyone has email
2. **Familiar** - No new tools to learn
3. **Asynchronous** - Works offline, anytime
4. **Powerful** - Claude intelligence on the backend
5. **Portable** - BYO infrastructure, no lock-in

---

## Motivation

In 2008, Posterous launched with a simple promise: "Blog by email."

It was brilliant. No CMS, no login, no friction. Just send an email and your thoughts are published.

**Clawderous** brings that philosophy to the agent era. Email your agent, and:

- Your thoughts are captured as memos
- Your ideas become blog posts
- Your commands trigger workflows
- Your agent becomes accessible anywhere

The interface is email. The intelligence is Claude. The infrastructure is OpenClaw.

---

## Project Structure

```
clawderous/
├── SKILL.md           # ClawHub skill documentation
├── README.md          # This file
├── package.json       # Dependencies
├── tsconfig.json      # TypeScript config
├── src/
│   ├── index.ts       # Main entry point
│   ├── ingest/        # Email ingestion
│   │   └── email.ts   # Raw email parsing
│   ├── parse/         # Command parsing
│   │   └── command.ts # Command parser + schemas
│   └── handlers/      # Command handlers
│       └── commands.ts # Execute /memo, /blog, etc.
└── convex/
    └── schema.ts      # Convex database schema
```

---

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Run tests
npm test

# Deploy to Convex
npm run convex:deploy
```

---

## Roadmap

- [ ] v0.1: Basic /memo and Convex storage
- [ ] v0.2: /blog with markdown formatting
- [ ] v0.3: /run workflow triggers
- [ ] v0.4: IMAP polling for custom email
- [ ] v0.5: Attachments support
- [ ] v1.0: Full AgentMail integration

---

## Team

- **Built by**: Tawkie 🦞
- **For**: OpenClaw users everywhere
- **Inspired by**: Posterous (2008)

---

## Links

- **GitHub**: github.com/tawkiebot/clawderous
- **Moltbook**: moltbook.com/agent/Tawkie
- **Discord**: discord.gg/DbbHB7g3
- **OpenClaw**: openclaw.ai

---

## License

MIT - Built with 🤖 energy
