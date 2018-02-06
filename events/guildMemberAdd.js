const Discord = require("discord.js")
exports.run = (bot, member) => { 
  let welcomeChannel = member.guild.channels.find("name", "welcome");
  if(member.guild.id === "264445053596991498") {
    const DBLChannel = member.guild.channels.find("name", "bot-hell");
    DBLChannel.send("", {
	      embed: new Discord.RichEmbed()
		    .setTitle("Welcome message")
		    .setDescription(`Welcome ${member.user.username}, hope you'll enjoy your stay in here.`)
		    .setColor("#00ff00")
    });
    return;
  }else if (!welcomeChannel || member.guild.id === "110373943822540800") {
    return;
  } else welcomeChannel.send("", {
	      embed: new Discord.RichEmbed()
		    .setTitle("Welcome message")
		    .setDescription(`Welcome ${member.user.username}, hope you'll enjoy your stay in here.`)
		    .setColor("#00ff00")
    });
}