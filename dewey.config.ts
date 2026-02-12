/** @type {import('@dewey/cli').DeweyConfig} */
export default {
  project: {
    name: 'clawederous',
    tagline: 'Email as the Universal Interface - Send an email, get things done',
    type: 'generic',
  },

  agent: {
    // Critical context that AI agents MUST know
    criticalContext: [
      'The project lives at /Users/tawkie/dev/clawederous/',
      'GitHub repo: https://github.com/tawkiebot/clawederous',
      'Site: https://tawkiebot.github.io/clawederous/',
      'ALWAYS use absolute paths from project root when referring to files',
      'Commands are defined in src/commands/ directory',
      'Workflows are defined in src/workflows/ directory',
      'Parsers for email commands are in src/parsers/',
    ],

    // Key entry points for navigating the codebase
    entryPoints: {
      'main': 'src/main.tsx',
      'app': 'src/App.tsx',
      'commands': 'src/commands/',
      'workflows': 'src/workflows/',
      'parsers': 'src/parsers/',
      'pages': 'src/pages/',
    },

    // Pattern-based navigation hints
    rules: [
      { pattern: 'email parsing', instruction: 'Check src/parsers/ for email command parsing logic' },
      { pattern: 'add command', instruction: 'Add new command files to src/commands/' },
      { pattern: 'add workflow', instruction: 'Add new workflow files to src/workflows/' },
      { pattern: 'UI pages', instruction: 'Check src/pages/ for React page components' },
      { pattern: 'build config', instruction: 'Check vite.config.ts and package.json' },
    ],

    // Which doc sections to include in AGENTS.md
    sections: ['overview', 'quickstart', 'architecture', 'skill'],
  },

  docs: {
    path: './docs',
    output: './',
    required: ['overview', 'quickstart'],
  },
}
