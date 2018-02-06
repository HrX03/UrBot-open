exports.run = (bot, message, args) => {
  message.delete()
  const member = message.mentions.users.first()
  const haxArgs = message.content.slice('u!hax '+ member + ' ').split(' ');
  const muteRole = bot.guilds.get(message.guild.id).roles.find('name', `Microsoft Excel`);
  message.guild.member(member).addRole(muteRole)
}