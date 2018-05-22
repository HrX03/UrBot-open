let Discord = require('discord.js')
exports.run = (bot, message, args) => {
  let emoji = message.guild.emojis.find('name', `${args.join(' ')}`)
  if(emoji === null) {
    message.channel.send('The entered emoji was not found!')
  }
  const embed = new Discord.RichEmbed()
    .setColor('#00AE86')
    .setImage(emoji.url)
  message.channel.send(embed)
}