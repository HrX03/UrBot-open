exports.run = (bot, message, args) => {
  let data = args.join(' ');  
  let buff = new Buffer(data);  
  let base64data = buff.toString('base64');
  message.channel.send(`Output: "${base64data}"`)
}