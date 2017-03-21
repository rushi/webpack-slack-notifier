const Slack = require('slack-node');

function SlackPlugin(options) {
  this.options = options;
  this.options.channel = options.channel || '#general';
  this.options.username = options.username || 'webhookbot';
  this.options.icon_emoji = options.icon_emoji || ':ghost:';
}

SlackPlugin.prototype.apply = function (compiler) {
  const slack = new Slack();
  slack.setWebhook(this.options.webhookUri);

  var self = this;
  compiler.plugin('done', function () {
    console.log('Sending a slack message to', self.channel);
    slack.webhook(self.options, function (err, response) {
      if (err) { console.log('Error', err); }
      console.log('Response', response);
    });
  });
};

module.exports = SlackPlugin;
