const Discord = require("discord.js")
var PREFIX = "u!";
exports.run = (bot, message, args) => {
  if(!args[0]) {
      message.channel.send("", {
	      embed: new Discord.RichEmbed()
		    .setTitle("Help page")
		    .setDescription("Avaiable categories: \n all \n bot \n mod \n miscellanous \n media \n music \n tag \n converters \n homebrew")
		    .setColor("#ff0000")
        .setFooter("Requested by: " + message.author.tag)
	  });
  }
  else if(args[0] === 'all') {
	    message.channel.send("", {
		    embed: new Discord.RichEmbed()
          .setTitle("Help page")
          .setDescription("")
          .addField("Bot stats Commands", `**Avaiable commands:** \n ${PREFIX}ping \n ${PREFIX}stats`)
          .addField("Mod Commands", `**Avaiable commands:** \n ${PREFIX}notify \n ${PREFIX}mute \n ${PREFIX}purge \n ${PREFIX}ban \n ${PREFIX}kick \n ${PREFIX}invite \n ${PREFIX}warn`)
          .addField("Miscellanous Commands", `Avaiable commands: \n ${PREFIX}help \n ${PREFIX}say`)
          .addField("Media Commands", `**Avaiable commands:** \n ${PREFIX}avatar \n ${PREFIX}giphy \n ${PREFIX}cats \n ${PREFIX}reddit \n ${PREFIX}xda`)
          .addField("Music commands", `**Avaiable commands:** \n ${PREFIX}play \n ${PREFIX}stop \n ${PREFIX}joinvoice`)
          .addField("Tag commands", `Avaiable commands: \n ${PREFIX}tag \n ${PREFIX}tagadd \n ${PREFIX}tagdel \n ${PREFIX}tagedit \n ${PREFIX}tagfind \n ${PREFIX}taglist`)
          .addField("Converters commands", `Avaiable commands: \n**BINARY** \n ${PREFIX}bin \n ${PREFIX}bintxt \n**HEX** \n ${PREFIX}hex \n ${PREFIX}hextxt \n ${PREFIX}hexcol \n**BASE64** \n ${PREFIX}b64 \n ${PREFIX}b64txt`)
          .addField("Homebrew commands", `**General Homebrew:** \n   ${PREFIX}guide \n**3DS Homebrew:** \n   ${PREFIX}useful-apps \n   ${PREFIX}ban-prev \n**WiiU Homebrew:** \n   Coming soon...`)
          .setFooter("Requested by: " + message.author.tag)
          .setColor("#ff0000")
    });
  }
    else if(args[0] === 'bot') {
	    message.channel.send("", {
		    embed: new Discord.RichEmbed()
          .setTitle("Help page")
          .setDescription("")
          .addField("Bot stats Commands", `**Avaiable commands:** \n ${PREFIX}ping \n ${PREFIX}stats`)
          .setFooter("Requested by: " + message.author.tag)
          .setColor("#ff0000")
     });
  }
    else if(args[0] === 'mod') {
	    message.channel.send("", {
		    embed: new Discord.RichEmbed()
          .setTitle("Help page")
          .setDescription("")
          .addField("Mod Commands", `**Avaiable commands:** \n ${PREFIX}notify \n ${PREFIX}mute \n ${PREFIX}purge \n ${PREFIX}ban \n ${PREFIX}kick \n ${PREFIX}invite \n ${PREFIX}warn`)
          .setFooter("Requested by: " + message.author.tag)
          .setColor("#ff0000")
     });
  }
    else if(args[0] === 'miscellanous') {
	    message.channel.send("", {
		    embed: new Discord.RichEmbed()
          .setTitle("Help page")
          .setDescription("")
          .addField("Miscellanous Commands", `Avaiable commands: \n ${PREFIX}help \n ${PREFIX}say`)
          .setFooter("Requested by: " + message.author.tag)
          .setColor("#ff0000")
     });
   }
    else if(args[0] === 'media') {
	    message.channel.send("", {
		    embed: new Discord.RichEmbed()
          .setTitle("Help page")
          .setDescription("")
          .addField("Media Commands", `**Avaiable commands:** \n ${PREFIX}avatar \n ${PREFIX}giphy \n ${PREFIX}cats \n ${PREFIX}google \n ${PREFIX}reddit \n ${PREFIX}xda`)
          .setFooter("Requested by: " + message.author.tag)
          .setColor("#ff0000")
     });
   }
    else if(args[0] === 'music') {
	    message.channel.send("", {
		    embed: new Discord.RichEmbed()
          .setTitle("Help page")
          .setDescription("")
          .addField("Music commands", `Avaiable commands: \n ${PREFIX}play \n ${PREFIX}stop \n ${PREFIX}joinvoice`)
          .setFooter("Requested by: " + message.author.tag)
          .setColor("#ff0000")
     });
   }
    else if(args[0] === 'tag') {
	    message.channel.send("", {
		    embed: new Discord.RichEmbed()
          .setTitle("Help page")
          .setDescription("")
          .addField("Tag commands", `Avaiable commands: \n ${PREFIX}tag \n ${PREFIX}tagadd \n ${PREFIX}tagdel \n ${PREFIX}tagedit \n ${PREFIX}tagfind \n ${PREFIX}taglist`)
          .setFooter("Requested by: " + message.author.tag)
          .setColor("#ff0000")
      });
   }
    else if(args[0] === 'converters') {
	    message.channel.send("", {
		    embed: new Discord.RichEmbed()
          .setTitle("Help page")
          .setDescription("")
          .addField("Converters commands", `Avaiable commands: \n**BINARY** \n ${PREFIX}bin \n ${PREFIX}bintxt \n**HEX** \n ${PREFIX}hex \n ${PREFIX}hextxt \n ${PREFIX}hexcol \n**BASE64** \n ${PREFIX}b64 \n ${PREFIX}b64txt`)
          .setFooter("Requested by: " + message.author.tag)
          .setColor("#ff0000")
      });
   }
    else if(args[0] === 'homebrew') {
	    message.channel.send("", {
		    embed: new Discord.RichEmbed()
          .setTitle("Help page")
          .setDescription("")
          .addField("General Homebrew ", `Avaiable commands: \n ${PREFIX}guide \n ${PREFIX}check-err`)
          .addField("3DS", `Avaiable commands: \n ${PREFIX}useful-apps \n ${PREFIX}ban-prev`)
          .addField("WiiU", `Coming soon...`)
          .setFooter("Requested by: " + message.author.tag)
          .setColor("#ff0000")
     });
   }
    else {
      message.channel.send("", {
		    embed: new Discord.RichEmbed()
          .setTitle("Help page")
          .setDescription("Please input a valid argument!")
          .setFooter("Requested by: " + message.author.tag)
          .setColor("#ff0000")
      });
    }
}