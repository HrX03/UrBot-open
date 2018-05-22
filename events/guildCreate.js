const Discord = require("discord.js")
exports.run = (bot, guild) => {
  let list = [];
  list=bot.guilds.find("name", guild.name).channels.map(c => c.name);
  let welcomeChannel = bot.guilds.find("name", guild.name).channels.find("name", list[1])
  welcomeChannel.send("", {
	      embed: new Discord.RichEmbed()
		    .setTitle("owo new guild!")
		    .setDescription(`Hi there! I'm UrBot, a nintendo homebrew specialized bot! My prefix is u! and if you actually want to see a list of some commands type u!help all. I hope we will have fun in there! :smile:`)
		    .setColor("#ff0000")
  })
}