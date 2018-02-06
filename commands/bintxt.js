exports.run = (bot, message, args) => {
  function binaryAgent(str) {

  var binString = '';

  str.split(' ').map(function(bin) {
    binString += String.fromCharCode(parseInt(bin, 2));
  });
    return binString;
  }
  message.channel.send(`Output: "${binaryAgent(args.join(' '))}"`);
}