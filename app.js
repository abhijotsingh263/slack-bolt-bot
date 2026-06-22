const { App } = require('@slack/bolt');
require('dotenv').config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

// Listen for messages
app.message('hello', async ({ message, say }) => {
  await say(`Hey there <@${message.user}>! 👋`);
});

// Listen for any message and echo it
app.message(async ({ message, say }) => {
  if (message.text && !message.bot_id) {
    await say(`You said: ${message.text}`);
  }
});

// Handle app_mention events
app.event('app_mention', async ({ event, say }) => {
  await say(`Thanks for mentioning me, <@${event.user}>!`);
});

(async () => {
  await app.start();
  console.log('⚡️ Slack Bolt Bot is running in Socket Mode!');
})();
