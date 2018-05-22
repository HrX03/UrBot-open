exports.run = (bot, message, args) => {
  let string = args.join(' ');
  message.channel.send(string.toLowerCase())
}