exports.run = async (bot, message, args) => {
if(!message.channel.permissionsFor(message.member).hasPermission("BAN_MEMBERS") )
  return message.reply("Sorry, you don't have permissions to use this! ❌");     
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
    
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");
        
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't n't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
}