const ms = require('ms')
exports.run = (bot, message, args) => {
  if(message.channel.permissionsFor(message.member).hasPermission("ADMINISTRATOR") ) {
    if(!bot.lockit) bot.lockit = [];
    let time = args.join(' ')
    let validUnlocks = ['release', 'unlock'];
    if(validUnlocks.includes(time)) {
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: null
      }).then(() => {
        message.channel.send('Lockdown lifted.');
        clearTimeout(bot.lockit[message.channel.id])
        delete bot.lockit[message.channel.id];
      }).catch(error => {
        console.log(error)
      });
    } else {
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      }).then(() => {
        message.channel.send(`Channel locked down`)
      });
    }
  } else return message.reply("You don't have permissions to do that! ❌")
}