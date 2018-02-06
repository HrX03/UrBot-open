const Discord = require('discord.js');
exports.run = (bot, message, args) => {
  const hexString = ['A', 'B', 'C', 'D', 'E', 'F', 'a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  function toHex(str) {
	  var hex = '';
	  for(var i=0;i<str.length;i++) {
		  hex += ''+str.charCodeAt(i).toString(16);
	  }
	  return hex;
  }
  let color = args.join(' ');
  if(message.content.includes('convert')) {
    let colorStringToConvert = message.content.slice('u!hexcol convert ').split(' ');
    if(colorStringToConvert.length != 3) {return message.channel.send("You can't convert a string bigger or smaller than 3")} else {
      color = toHex(colorStringToConvert[2])
      return message.channel.send("", {
        embed: new Discord.RichEmbed()
          .setTitle("Color checker")
          .setDescription("Here is your color!")
          .setColor(`#${color}`)
          .setFooter("Requested by: " + message.author.tag)
      });
    }
  }
  if(hexString.some(word => message.content.includes(word)) ) {
    if(color.length != 6) return message.channel.send('This is not a valid color!')
    if(color.length === 6) {
      return message.channel.send("", {
        embed: new Discord.RichEmbed()
          .setTitle("Color checker")
          .setDescription("Here is your color!")
          .setColor(`#${color}`)
          .setFooter("Requested by: " + message.author.tag)
      });
    }
  } else return message.channel.send("You can't use non hex values!")
}