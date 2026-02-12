# CLI Reference

## Commands

### `npm run dev`

Start the Clawederous agent in development mode.

```bash
npm run dev
```

**Options:**
- `--watch` — Auto-restart on file changes (default)
- `--verbose` — Debug logging

### `npm run start`

Start the agent in production mode.

```bash
npm run start
```

### `npm run help`

Show help information.

```bash
npm run help
```

### `npm run test`

Run the test suite.

```bash
npm run test
```

### `npm run lint`

Check code quality.

```bash
npm run lint
```

## Programmatic Usage

### Start the Agent

```typescript
import { Clawederous } from './src/agent';

const agent = new Clawederous({
  imapConfig: {
    host: process.env.IMAP_HOST,
    port: Number(process.env.IMAP_PORT),
    user: process.env.IMAP_USER,
    password: process.env.IMAP_PASS,
  },
  dataDir: './data',
});

agent.start();
```

### Process a Single Email

```typescript
import { processEmail } from './src/parser';

const result = await processEmail({
  from: 'user@example.com',
  subject: '/tweet Hello world',
  body: 'Just testing Clawederous!',
});

console.log(result);
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `IMAP_HOST` | Yes | IMAP server hostname |
| `IMAP_PORT` | Yes | IMAP port (993 for SSL) |
| `IMAP_USER` | Yes | Email address |
| `IMAP_PASS` | Yes | App password or API key |
| `OPENCLAW_URL` | No | OpenClaw gateway URL |
| `AGENT_KEY` | No | OpenClaw agent key |
| `TWITTER_*` | No | Twitter API credentials |
| `DATA_DIR` | No | Data storage directory |

## Output Formats

### JSON Mode

For programmatic use, output JSON:

```bash
CLAWEROUS_FORMAT=json npm run dev
```

### Quiet Mode

Minimal output:

```bash
CLAWEROUS_VERBOSE=false npm run dev
```
