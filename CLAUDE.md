# CLAUDE.md

This file provides guidance for AI agents working with Clawederous.

## Project Context

- **Name**: Clawederous
- **Purpose**: Email as the Universal Interface
- **Location**: `/Users/tawkie/dev/clawederous/`
- **GitHub**: https://github.com/tawkiebot/clawederous
- **Site**: https://tawkiebot.github.io/clawederous/

## Critical Rules

- ALWAYS use absolute paths from project root
- NEVER modify `.env` - it's for local configuration only
- ALWAYS commit generated documentation files (AGENTS.md, llms.txt)
- Use TypeScript for all new code

## Codebase Navigation

- Commands: `src/commands/`
- Workflows: `src/workflows/`
- Parsers: `src/parsers/`
- Pages: `src/pages/`
- Tests: `tests/`

## Common Tasks

### Add a Command
1. Create `src/commands/CommandName.ts`
2. Export from `src/commands/index.ts`
3. Add tests in `tests/`
4. Document in `docs/quickstart.md`

### Run Tests
```bash
npm test
```

### Start Dev Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## Commands Reference

| Command | File | Purpose |
|---------|------|---------|
| `/ping` | PingCommand.ts | Health check |
| `/note` | NoteCommand.ts | Save to knowledge base |
| `/log` | LogCommand.ts | Journal entry |
| `/remind` | RemindCommand.ts | Create reminder |
| `/tweet` | TweetCommand.ts | Post to X/Twitter |
| `/claris` | ClarisCommand.ts | Forward to recipient |
| `/summarize` | SummarizeCommand.ts | AI summary |
