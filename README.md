## webpack-slack-notifier

This is a webpack plugin that will send a message using the [slack-node](https://www.npmjs.com/package/slack-node) plugin.

### Usage

Install the plugin using `npm install webpack-slack-notifier`

Add it in your webpack configuration:
```js
const SlackPlugin = require('webpack-slack');
```

In your plugins:
```js
"plugins": [
    new SlackPlugin({
        webhookUri: 'https://hooks.slack.com/my-webhook-uri',
        username: 'Incoming Webhook',
        channel: '#general',
        text: 'Hello, world'
    });
]
```

For more options for `SlackPlugin` see the documentation for [slack-node](https://www.npmjs.com/package/slack-node).
