exports.run = async (bot, message, args) => {
if(!message.channel.permissionsFor(message.member).hasPermission("ADMINISTRATOR") )
  return message.reply("Sorry, you don't have permissions to use this! ❌");     
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the warn!");
        
    await member.send(`You have been warned by <@${message.author.id}> for this reason: ${reason}`)
      .catch(error => message.reply(`Sorry <@${message.author.id}> I couldn't n't warn because of : ${error}`));
    message.channel.send(`<@${member.user.id}> has been warned by <@${message.author.id}> because: ${reason}`);
}