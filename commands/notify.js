exports.run = (bot, message, args) => {
  let notifyArgs = args = message.content.split(" ")
  if(message.channel.permissionsFor(message.member).hasPermission("ADMINISTRATOR") ) {
    message.delete()
    if (message.mentions.users.first().id === message.author.id) return message.reply("Can't notify yourself!")
    var PREFIX = "u!";
    let notification = `"${message.author.tag}" notified you: ${notifyArgs.slice(2).join(' ')}`
    message.mentions.users.first().send(notification)
  } else message.channel.send('No permissions found for that sorry ❌')
}