exports.run = (bot, message, args) => {
  let guild = args.join(' ')
  let list = [];
  list=bot.guilds.find("name", guild).channels.map(c => c.name);
  bot.guilds.find("name", guild).channels.find("name", list[1]).createInvite().then(invite=>message.channel.send(invite.url))
}