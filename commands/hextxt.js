exports.run = (bot, message, args) => {
  function hexToString (hex) {
    var string = '';
    for (var i = 0; i < hex.length; i += 2) {
      string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return string;
  }
  message.channel.send(`Output: "${hexToString(args.join(' '))}"`);
}