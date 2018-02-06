exports.run = (bot, message, args) => {
  function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
  }
  message.channel.send(`Output: "${text2Binary(args.join(' '))}"`);
}