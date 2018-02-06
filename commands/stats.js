const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");
var os = require('os');
var guilds = {};
exports.run = (bot, message, args) => {
      message.channel.send("", {
	      embed: new Discord.RichEmbed()
		    .setTitle("General Stats")
        .setDescription(` Username ${bot.user.tag}`)
        .addField('Bot Statistics', `User Count       :: ${bot.guilds.reduce((p, c) => p + c.memberCount, 0).toLocaleString() } Users\n  Bots Count       :: ${bot.users.filter(user => user.bot).size.toLocaleString()} Bots\n  Server Count     :: ${bot.guilds.size.toLocaleString()} Servers\n  Custom emojis    :: ${bot.emojis.size.toLocaleString()} Emojis\n  Channel Count    :: ${bot.channels.size.toLocaleString()} Channels`)
        .addField('Bot infomation', `Heartrate ping   :: ${Math.round(bot.ping)}ms`)
        .addField('Process Statistics', `DiscordJS ver    :: ${Discord.version}\n  NodeJS ver       :: ${process.version}\n  Process uptime   :: ${moment.duration(process.uptime() * 1000).format(" D [days] H [hrs] m [mins] s [secs]")}\n  Client ready     :: ${moment.duration(bot.uptime).format(" D [days] H [hrs] m [mins] s [secs]")}`)
        .addField('Glitch Statistics', `Operating system :: ${os.type().replace("_", " ")} v${os.release()}\n  OS Uptime        :: ${moment.duration(os.uptime(), "seconds").format(" D [days] H [hrs] m [mins] s [secs]")}\n  Memory Usage     :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\n  Memory Heap      :: ${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB\n  Total memory     :: ${(os.totalmem() / Math.pow(1024, 3)).toLocaleString()} Gigabytes\n  Free memory      :: ${(os.freemem() / Math.pow(1024, 3)).toLocaleString()} Gigabytes`)
		    .setColor("#827e00")
        .setFooter("Requested by: " + message.author.tag)
	  });
}
