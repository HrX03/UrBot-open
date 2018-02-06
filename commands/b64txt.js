exports.run = (bot, message, args) => {
  let data = args.join(' ');
  let buff = new Buffer(data, 'base64');
  let text = buff.toString('ascii');
  message.channel.send(`Output: "${text}"`)
}