# Add New Command to Clawederous

## Context
Clawederous uses a command-based system where emails with specific prefixes trigger actions.

## Steps

### 1. Create Command File
Create `src/commands/YourCommandName.ts`:

```typescript
import { BaseCommand, CommandContext } from './BaseCommand'

export class YourCommandName extends BaseCommand {
  name = 'yourcommand'
  description = 'What your command does'
  
  async handle(ctx: CommandContext): Promise<void> {
    // Extract arguments from email body or subject
    const args = ctx.emailBody
    
    // Your command logic here
    
    // Reply to sender
    await ctx.reply('Command executed successfully!')
  }
}
```

### 2. Register Command
Add to `src/commands/index.ts`:

```typescript
export { YourCommandName } from './YourCommandName'
```

### 3. Add Tests
Create `tests/YourCommandName.test.ts`

### 4. Document
Update `docs/quickstart.md` with command example
