const Discord = require("discord.js");

const fs = require("fs");
const http = require('http');
const express = require('express');
const app = express();
const sql = require("sqlite");
let user = {};

let data = process.env['TOKEN'];
let buff = new Buffer(data, 'base64');
let token = buff.toString('ascii');

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/commands.html", function (request, response) {
  response.sendFile(__dirname + '/views/commands.html');
});

app.get("/about.html", function (request, response) {
  response.sendFile(__dirname + '/views/about.html');
});

var bot = new Discord.Client();
const config = require("./commands/config.json");
const settings = require("./commands/settings.json")

var servers = {};
var playing = ' ';
let keys= ["HI66Q-I2P0C-QX4PM-3HO52"]
let premium = JSON.parse(fs.readFileSync("./premium.json", "utf8"));

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    
    bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
  });
});

bot.on('message', async message => {
  if(!settings[message.guild.id]) settings[message.guild.id] = {
    prefix: "u!",
    lang: "en"
  }
  
  var prefixes = ['u!', 'U!', '!u', '!U', 'urbot!', 'UrBot!', '!urbot', '!UrBot', '<@400755997716512788> '];
  let PREFIX = false;
  for(const thisPrefix of prefixes) {
    if(message.content.startsWith(thisPrefix)) PREFIX = thisPrefix;
  }
  if(!PREFIX) return;

  const args = message.content.slice(PREFIX.length).split(' ');
  const command = args.shift().toLowerCase();
  
  if (!message.content.startsWith(PREFIX) || message.author.bot) return
  
  if(message.channel.type === "dm") {
    if(message.content.startsWith('u!redeem')) {
      let key = message.content.slice(PREFIX.length).split(' ')
      if(key[0] === keys[0]) {
        message.channel.send('The key ' + keys[0] + ' has been activated')
        let user = message.author.tag
        bot.users.get('270644886758359051').send('The key ' + keys[0] + ' has been activated by ' + user)
      }
    } else message.channel.send('Invalid key!')
    return
  }
  
   if(message.channel.type === "dm") return;
  
  message.guild.fetchMember(message.author).then(m => {
	  if (m.roles.exists("name", "Muted")) return message.delete(); //this is for muted role
  })
  
  if(message.channel.topic === '<no-bots>') return;
  
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