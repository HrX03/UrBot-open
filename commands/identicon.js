const identicon = require('identicon')
const fs = require('fs');
exports.run = (bot, message, args) => {
  var buffer = identicon.generateSync({ id: args.join(' '), size: 500 });
  fs.writeFileSync('./commands/images/identicon.png', buffer);
  message.channel.send('Here you go!, this is your image derivated from this string: ' + args.join(' '), { file: "./commands/images/identicon.png" })
}