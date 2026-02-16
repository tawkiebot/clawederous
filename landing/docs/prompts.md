---
title: Task Templates
description: Common task templates for Clawderous
order: 10
---

# Task Templates

## Deploy
```
Steps to deploy Clawderous:
1. npm run build:frontend
2. cp dist/index.html dist/404.html
3. cd dist && git add . && git commit -m "Deploy" && git push -f
```

## Add Command
```
To add /remind:
1. Edit landing/parse/command.ts - add RemindSchema
2. Edit landing/handlers/commands.ts - add RemindHandler
3. Test by emailing clawederous@agentmail.to
```

## Test Local
```
npm run dev
```
