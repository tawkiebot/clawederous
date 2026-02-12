# Clawederous Skills

Skills are pre-built task templates for common operations.

## Built-in Skills

### Command Development
Use `docs/prompts/add-command.md` to add new commands to Clawederous.

### Workflow Creation
Create new workflows in `src/workflows/` following the pattern in existing workflows.

### Testing
Run tests with: `npm test`

## Skill Pattern

Each skill should include:
1. Context - What the task accomplishes
2. Prerequisites - What must exist first
3. Steps - Numbered steps for the agent
4. Validation - How to verify success
