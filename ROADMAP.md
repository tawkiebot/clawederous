# Clawederous - Project Roadmap

## ✅ Done

- Project structure created
- README.md with philosophy and examples
- docs/getting-started.md - Setup guide
- docs/cli.md - Command reference  
- docs/workflows.md - Core workflows
- .env.example - Configuration template
- src/index.ts - Main entry point
- src/imap.ts - IMAP connection
- src/parsers/command.ts - Command parser
- src/workflows/engine.ts - Workflow execution engine
- src/utils/git.ts - Git utilities
- package.json, tsconfig.json, .gitignore
- Initial commits (2)

## 🚧 In Progress

- [ ] Test the actual IMAP connection
- [ ] Set up GitHub remote and push
- [ ] Create GitHub Actions CI/CD
- [ ] Add real Twitter API integration
- [ ] Implement AgentMail API integration
- [ ] Add SMTP for sending replies

## 📋 Todo

### Documentation
- [ ] Add API reference docs
- [ ] Create architecture diagram
- [ ] Write "Why Email?" blog post
- [ ] Add troubleshooting FAQ

### Features
- [ ] Shorthand syntax for meeting notes (@claris, etc.)
- [ ] Daily/weekly digest automation
- [ ] Support for attachments
- [ ] Multi-account support
- [ ] Plugin system for custom commands

### Integrations
- [ ] Twitter/X API
- [ ] Slack notifications
- [ ] Signal messages
- [ ] Telegram bot
- [ ] Calendar integration
- [ ] Notion sync

### Dev Experience
- [ ] Docker container
- [ ] npm package publish
- [ ] VSCode extension
- [ ] Hot reload

## 🎯 Next Milestone: MVP

Goal: Send `/ping` and receive a reply

1. Test IMAP connection with AgentMail
2. Verify command parsing works
3. Confirm reply is sent
4. Document the flow

## 📝 Notes

- Started as homage to Posterous (2008)
- AgentMail as default provider
- Time-boxed: quick, beautiful, hackable
- Remote: https://github.com/tawkie/clawederous (needs push)

## 🔗 Links

- Posterous: https://en.wikipedia.org/wiki/Posterous
- AgentMail: https://agentmail.io
- OpenClaw: https://github.com/openclaw/openclaw
