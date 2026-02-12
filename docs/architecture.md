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
