---
title: Overview
description: Email as the Universal Interface - A homage to Posterous (2008)
order: 1
---

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
