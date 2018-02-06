const Discord = require("discord.js")

const fs = require("fs");
const http = require('http');
const express = require('express');
const app = express();
const sql = require("sqlite");
sql.open("./score.sqlite");
let user = {};

let data = process.env['TOKEN'];
let buff = new Buffer(data, 'base64');
let token = buff.toString('ascii');

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);



var bot = new Discord.Client();
const config = require("./commands/config.json");
bot.config = config

var servers = {};
var playing = ' ';

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
  });
});

bot.on('message', async message => {
  
  var PREFIX = config.prefix;

  message.guild.fetchMember(message.author).then(m => {
	  if (m.roles.exists("name", "Muted")) return message.delete(); //this is for muted role
  })
  
  if (!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type === "dm") return;

  const args = message.content.slice(PREFIX.length).split(' ');
  const command = args.shift().toLowerCase();
  
  if(config.maintenanceModeCheck === 1) {
    if(message.author.id === '270644886758359051') {
      try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(bot, message, args);
      } catch (err) {
        console.error(err);
        bot.users.get('270644886758359051').send("", {
	        embed: new Discord.RichEmbed()
		        .setTitle(":x: AN ERROR OCCURRED :x:")
		        .setDescription(err)
		        .setColor("#ff0000")
            .setTimestamp()
	      });
      }
      return;
    }else return message.channel.send(":information_source: **The bot is in maintenance mode, please retry later!** :information_source:")
  }
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(bot, message, args);
    bot.channels.get('406775625739665408').send("", {
	    embed: new Discord.RichEmbed()
		  .setTitle("Commands logs!")
		  .setDescription(`${message.author.tag} used ${command} in this server : ${message.guild.name}, here the channel name : #${message.channel.name}`)
		  .setColor("#ff0000")
      .setTimestamp()
	  });
  } catch (err) {
    bot.channels.get('406804972232245248').send("", {
	    embed: new Discord.RichEmbed()
		  .setTitle(":x: AN ERROR OCCURRED :x:")
		  .setDescription(err)
		  .setColor("#ff0000")
      .setTimestamp()
	  });
  }
  
});

bot.login(token);