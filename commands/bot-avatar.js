exports.run = (bot, message, args) => {
  if(message.author.id === "270644886758359051") {
    if(args === '') return message.reply("Can't be empty!")
    if(args === ' ') return message.reply("Can't be empty!")
    let avatar = args.join(' ');
    bot.user.setAvatar(avatar)
    message.reply(`New avatar: "${avatar}"`)
  } else return message.reply("Only the bot owner can use this command!")
}