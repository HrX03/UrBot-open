exports.run = async (bot, message, args) => {
  if(message.channel.permissionsFor(message.member).hasPermission("KICK_USERS") ) {
    const member = message.mentions.users.first()
    const muteRole = bot.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.channel.send("I cannot find the Muted role");
  
    if(message.guild.member(member).roles.has(muteRole.id)) {
      message.guild.member(member).removeRole(muteRole)
      message.channel.send(`<@${message.mentions.users.first().id}> you have been unmuted by <@${message.author.id}>`)
    } else { 
       message.guild.member(member).addRole(muteRole)
      message.channel.send(`<@${message.mentions.users.first().id}> you have been muted by <@${message.author.id}>`)
    } 
  } else return message.reply("You don't have permissions to do that! ❌")
}