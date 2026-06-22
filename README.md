# Slack Bolt Bot

A Slack bot built with [@slack/bolt](https://slack.dev/bolt-js/) for Socket Mode. The bot connects to Slack workspaces, responds to messages, and demonstrates event-driven architecture.

## Features

- Socket Mode connection (no public URL needed)
- Responds to messages and mentions
- Event-driven architecture with @slack/bolt
- Built with JavaScript on Replit

## Setup

1. Clone the repo
2. Run `npm install`
3. Copy `.env.template` to `.env` and fill in your tokens:
   - `SLACK_BOT_TOKEN` — from OAuth & Permissions page
   - `SLACK_APP_TOKEN` — from Basic Information > App-Level Tokens (with `connections:write` scope)
4. Run `node app.js`

## Environment Variables

```
SLACK_BOT_TOKEN=xoxb-...
SLACK_APP_TOKEN=xapp-...
```

> ⚠️ Never commit your `.env` file. Tokens are sensitive.

## Tech Stack

- Node.js
- @slack/bolt
- Socket Mode
- Replit (deployment)

## Built for

Hack Club Stardance Challenge 2025
