exports.run = (bot, message, args) => {
  const pingRole = bot.guilds.get(message.guild.id).roles.find('name', 'everytwo');
  message.guild.member(message.author.id).removeRole(pingRole)
  message.reply('Ping role has been removed')
}
