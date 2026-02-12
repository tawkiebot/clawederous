# API Reference

## Command Interface

```typescript
interface BaseCommand {
  name: string
  description: string
  handle(ctx: CommandContext): Promise<void>
}

interface CommandContext {
  emailFrom: string
  emailSubject: string
  emailBody: string
  reply(message: string): Promise<void>
}
```

## Available Commands

### PingCommand
```typescript
class PingCommand extends BaseCommand {
  name = 'ping'
  description = 'Health check'
  async handle(ctx: CommandContext): Promise<void>
}
```

### NoteCommand
```typescript
class NoteCommand extends BaseCommand {
  name = 'note'
  description = 'Save to knowledge base'
  async handle(ctx: CommandContext): Promise<void>
}
```

### LogCommand
```typescript
class LogCommand extends BaseCommand {
  name = 'log'
  description = 'Daily journal entry'
  async handle(ctx: CommandContext): Promise<void>
}
```

### RemindCommand
```typescript
class RemindCommand extends BaseCommand {
  name = 'remind'
  description = 'Create reminder'
  async handle(ctx: CommandContext): Promise<void>
}
```

### TweetCommand
```typescript
class TweetCommand extends BaseCommand {
  name = 'tweet'
  description = 'Post to X/Twitter'
  async handle(ctx: CommandContext): Promise<void>
}
```

### ClarisCommand
```typescript
class ClarisCommand extends BaseCommand {
  name = 'claris'
  description = 'Forward to recipient'
  async handle(ctx: CommandContext): Promise<void>
}
```

### SummarizeCommand
```typescript
class SummarizeCommand extends BaseCommand {
  name = 'summarize'
  description = 'AI summary'
  async handle(ctx: CommandContext): Promise<void>
}
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `AGENTMAIL_API_KEY` | Yes | AgentMail API key |
| `AGENTMAIL_INBOX` | Yes | Your inbox address |
| `TWITTER_API_KEY` | No | For `/tweet` command |
| `DATA_DIR` | No | Data directory (default: `./data`) |
