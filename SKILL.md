# Clawderous

**Email-to-anything for OpenClaw. Claude on Claw, via Email.**

---

## What is Clawderous?

Clawderous brings the Posterous magic to OpenClaw. Instead of just blogging by email, you can:

- 📝 **/memo** - Quick notes stored in Convex
- ✍️ **/blog** - Publish blog posts
- ⚡ **/run** - Trigger OpenClaw workflows
- ↩️ **/reply** - Send email replies
- 🔍 **/status** - Check your Clawderous stats
- ❓ **/help** - Get help

---

## Setup

### 1. Install via ClawHub

```bash
clawhub install clawderous
```

### 2. Get AgentMail

**AgentMail** provides email inboxes for AI agents.

1. Go to [console.agentmail.to](https://console.agentmail.to)
2. Sign up and get your API key
3. Create an inbox (e.g., `claw`)

Your email will be: **clawederous@agentmail.to**

### 3. Configure

**Environment variable:**
```bash
export AGENTMAIL_API_KEY=your_api_key_here
clawderous start
```

**Or in code:**
```typescript
import { clawderous } from "clawderous";

await clawderous.configure("your_api_key");
await clawderous.getInbox(); // Creates clawederous@agentmail.to
await clawderous.start();    // Starts polling
```

---

## Usage

Simply email your Clawderous address:

### Quick Memo
```
To: clawederous@agentmail.to
Subject: /memo Ideas for the project
Body: Just thought of a great feature...
```

Response:
```
✅ Memo saved!
📝 Quick note
🔗 https://tawkie.dev/memo/abc123
```

### Blog Post
```
To: clawederous@agentmail.to
Subject: /blog Why Email Still Matters
Body: Email is the original API...
```

Response:
```
✅ Blog published!
✍️ "Why Email Still Matters"
🔗 https://tawkie.dev/blog/abc123
```

### Run Workflow
```
To: clawederous@agentmail.to
Subject: /run daily-backup
```

Response:
```
⚡ Running: daily-backup
✅ Done!
```

---

## Commands Reference

| Command | Description | Example |
|---------|-------------|---------|
| `/memo [title]` | Save a quick note | `/memo Shopping list` |
| `/blog <title>` | Publish blog post | `/blog My Thoughts` |
| `/run <workflow>` | Execute workflow | `/run backup-all` |
| `/reply <to>` | Send reply email | `/reply john@example.com` |
| `/status` | View your stats | `/status` |
| `/help` | Show help | `/help` |

---

## Architecture

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Email     │───▶│  Clawderous  │───▶│   Output    │
│  (AgentMail │    │   Engine     │    │  Handlers   │
│   or IMAP)  │    │              │    │             │
└─────────────┘    └─────────────┘    │ • Convex    │
                                       │ • Blog      │
                                       │ • Workflow  │
                                       └─────────────┘
```

---

## BYO Infrastructure

Clawderous is **Bring Your Own**:

- **Email**: AgentMail or your own IMAP/SMTP
- **Intelligence**: Claude via OpenClaw
- **Storage**: Convex, R2, or GitHub Gists
- **Workflows**: Your OpenClaw workflows

---

## Files

```
clawderous/
├── SKILL.md           # This file
├── README.md         # Full documentation
├── src/
│   ├── index.ts      # Main entry point
│   ├── ingest/       # Email parsing
│   ├── parse/        # Command parser
│   └── handlers/     # Command handlers
├── convex/
│   └── schema.ts     # Convex storage
└── package.json
```

---

## Motivation

> "Posterous let you blog by emailing. Clawderous lets you do *anything* by emailing your agent."

Email is universal. Everyone has it. No new apps, no friction.

**Clawderous = Email + Claude + OpenClaw**

---

## Credit

Named in homage to **Posterous** (founded 2008 by Gary Tan, Samet Keskin, Espen Henningson, and Ilya Sukhar).

---

## Support

- GitHub: github.com/tawkiebot/clawderous
- Moltbook: @Tawkie
- Discord: discord.gg/DbbHB7g3
