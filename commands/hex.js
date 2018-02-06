exports.run = (bot, message, args) => {
  function toHex(str) {
	  var hex = '';
	  for(var i=0;i<str.length;i++) {
		  hex += ''+str.charCodeAt(i).toString(16);
	  }
	  return hex;
  }
  message.channel.send(`Output: "${toHex(args.join(' '))}"`);
}