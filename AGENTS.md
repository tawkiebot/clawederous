# clawederous

> Email as the Universal Interface - Send an email, get things done

## Critical Context

**IMPORTANT:** Read these rules before making any changes:

- The project lives at /Users/tawkie/dev/clawederous/
- GitHub repo: https://github.com/tawkiebot/clawederous
- Site: https://tawkiebot.github.io/clawederous/
- ALWAYS use absolute paths from project root when referring to files
- Commands are defined in src/commands/ directory
- Workflows are defined in src/workflows/ directory
- Parsers for email commands are in src/parsers/

## Project Structure

| Component | Path | Purpose |
|-----------|------|---------|
| Main | `src/main.tsx` | |
| App | `src/App.tsx` | |
| Commands | `src/commands/` | |
| Workflows | `src/workflows/` | |
| Parsers | `src/parsers/` | |
| Pages | `src/pages/` | |

## Quick Navigation

- Working with **email parsing**? → Check src/parsers/ for email command parsing logic
- Working with **add command**? → Add new command files to src/commands/
- Working with **add workflow**? → Add new workflow files to src/workflows/
- Working with **UI pages**? → Check src/pages/ for React page components
- Working with **build config**? → Check vite.config.ts and package.json

## Overview

> Email as the Universal Interface - A homage to Posterous (2008)

# Clawederous

**Email as the Universal Interface**

A homage to Posterous (2008). Send an email, get things done. No apps, no logins, no friction. Your inbox is your terminal.

## What is Clawederous?

Clawederous is an email-powered automation platform that lets you accomplish tasks by simply sending emails. It's built for the AI agent era, where your inbox becomes your command center.

## Core Philosophy

- **Protocol Over Platform** - Email is the one protocol that works everywhere. No accounts, no lock-in.
- **Agents Should Have Identities** - AI agents need their own inboxes and presence.
- **Own Your Infrastructure** - No vendor lock-in. Your data, your rules.
- **Simplicity Is Power** - The best tools disappear. You focus on the work, not the workflow.

## Available Commands

| Command | Purpose |
|---------|---------|
| `/ping` | Health check |
| `/tweet` | Post to X/Twitter |
| `/note` | Save to knowledge base |
| `/claris` | Forward to recipient |
| `/log` | Daily journal entry |
| `/remind` | Create reminder |
| `/summarize` | AI summary |

## Project Structure

```
clawederous/
├── src/
│   ├── commands/     # Command handlers
│   ├── workflows/    # Workflow definitions
│   ├── parsers/      # Email command parsers
│   ├── pages/        # React UI pages
│   └── App.tsx       # Main app with routing
├── docs/             # Documentation
└── .env             # Environment configuration
```

## Quick Links

- [Quickstart](./quickstart.md) - Get started in 5 minutes

## Quickstart

> Get started with Clawederous in 5 minutes

# Quickstart

Get up and running with **Clawederous** in under 5 minutes.

## Prerequisites

- Node.js 18+
- An AgentMail inbox (or any IMAP provider)
- Git

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/tawkiebot/clawederous
cd clawederous
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Copy the example environment file and add your credentials:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```bash
# Required
AGENTMAIL_API_KEY=your_api_key
AGENTMAIL_INBOX=you@agentmail.to

# Optional
TWITTER_API_KEY=your_twitter_key
DATA_DIR=./data
```

### 4. Start the Agent

```bash
npm run dev
```

Your agent is now running and listening for emails!

## Usage

Send an email to your AgentMail inbox with commands:

| Email Subject | Action |
|--------------|--------|
| `/note Ideas for the project` | Saves to knowledge base |
| `/log Today's progress` | Journal entry |
| `/remind tomorrow 9am Meeting` | Creates reminder |
| `/tweet Just shipped!` | Posts to X/Twitter |

## Next Steps

- Read the [Overview](./overview.md) for architecture details
- Explore command handlers in `src/commands/`
- Add your own commands to `src/commands/`

## Architecture

# Architecture

## Project Structure

```
clawederous/
├── src/
│   ├── commands/     # Email command handlers
│   │   ├── BaseCommand.ts
│   │   ├── index.ts
│   │   ├── PingCommand.ts
│   │   ├── NoteCommand.ts
│   │   └── ...
│   ├── workflows/    # Workflow definitions
│   ├── parsers/       # Email parsing logic
│   ├── pages/        # React UI pages
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── ...
│   ├── App.tsx       # Main app with routing
│   └── main.tsx      # Entry point
├── docs/             # Documentation
├── .env              # Environment (not committed)
└── package.json
```

## Command Flow

1. Email arrives at AgentMail inbox
2. Clawederous polls and receives email
3. Parser extracts command and arguments
4. Command handler processes request
5. Result sent back via email reply

## Adding Commands

See `docs/prompts/add-command.md` for step-by-step guide.

## Skill

# Clawederous Skills

Skills are pre-built task templates for common operations.

## Built-in Skills

### Command Development
Use `docs/prompts/add-command.md` to add new commands to Clawederous.

### Workflow Creation
Create new workflows in `src/workflows/` following the pattern in existing workflows.

### Testing
Run tests with: `npm test`

## Skill Pattern

Each skill should include:
1. Context - What the task accomplishes
2. Prerequisites - What must exist first
3. Steps - Numbered steps for the agent
4. Validation - How to verify success

---
Generated by [Dewey](https://github.com/arach/dewey) | Last updated: 2026-02-12