exports.run = (bot, message, args) => {
  let string = args.join(' ');
  message.channel.send('The string you entered is ' + string.length.toString() + ' characters long!')
}