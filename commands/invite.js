exports.run = (bot, message, args) => {
  if(!message.channel.permissionsFor(message.member).hasPermission("CREATE_INSTANT_INVITE") )
    return message.reply("You don't have permission to do that!")
  message.channel.createInvite().then(invite =>  
  message.channel.send("Here's your invite link: "+ invite.url)
  );
}