---
title: Quickstart
description: Get started with Clawederous in 5 minutes
order: 2
---

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
