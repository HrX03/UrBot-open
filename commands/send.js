const Discord = require('discord.js')
exports.run = (bot, message, args) => {
  let gatewayMessage = args.join(' ')
  const embed = new Discord.RichEmbed()
    .setTitle("Gateway")
    .setAuthor(message.author.username+"#"+message.author.discriminator /*, message.author.avatarURL*/)
    .setColor("#ff0000")
    .setDescription(gatewayMessage)
    .setFooter(message.guild.name.replace(/`/g,"").replace(/_/g,"").replace(/\*/g,"")+" | "+message.author.id , message.guild.iconURL)
    .setThumbnail(message.author.avatarURL);
  bot.guilds.get('400757152592953355').channels.get('414776398712930304').send({embed})
}