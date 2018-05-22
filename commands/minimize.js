var tinytext = require('./lib/tiny.js');

exports.run = (bot, message, args) => {
  function minimize(text) {
    return text.split('').map(function(a) {
      return tinytext.hasOwnProperty(a) ? tinytext[a] : a;
    }).join('');
  };
  message.channel.send(minimize(args.join(' ')))
}