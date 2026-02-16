# CLAUDE.md - Clawderous Agent Rules

## Project Overview
- **Name**: Clawderous
- **Type**: Email-to-anything automation tool for OpenClaw
- **Frontend**: React + Vite SPA at `src/`
- **Backend**: Email engine at `landing/`
- **Deployed**: https://tawkiebot.github.io/clawderous/

## Key Files
- `src/App.tsx` - React router setup (BrowserRouter)
- `landing/index.ts` - Main backend entry
- `landing/handlers/commands.ts` - Command handlers
- `landing/parse/command.ts` - Email parsing

## Commands
All triggered via email subject: `/memo`, `/blog`, `/run`, `/reply`, `/status`, `/help`

## Deployment
```bash
npm run build:frontend
cp dist/index.html dist/404.html
cd dist && git add . && git commit -m "Deploy" && git push -f
```

## Testing
- Run locally: `npm run dev`
- Frontend: `npm run dev:frontend`

## Critical Rules
- Always build before deploying
- Use gh-pages branch for GitHub Pages (not main)
- Keep AGENTS.md updated with any new entry points
