const Discord = require("discord.js")
exports.run = (bot, message, args) => {
  if(!args[0]) {
    message.channel.send("", {
      embed: new Discord.RichEmbed()
      .addField("Get command page", `Avaiable arguments:\n guild-info\n guild-list\n channel-info\n user-id\n author-id\n role-id\n emoji-list`)
      .setColor("#ff0000")
      .setFooter("Requested by: " + message.author.tag)
    })
  }
  if(args[0] === "guild-info") {
    message.channel.send("", {
      embed: new Discord.RichEmbed()
      .addField("Get guild-info", `${message.guild.name}: "${message.guild.id}"`)
      .setColor("#ff0000")
      .setFooter("Requested by: " + message.author.tag)
    })
  }
  if(args[0] === "guild-list") {
    const guildNames = bot.guilds.map(g => g.name).join("\n")
    message.channel.send("", {
      embed: new Discord.RichEmbed()
      .addField("Get guild-list", `${guildNames}`)
      .setColor("#ff0000")
      .setFooter("Requested by: " + message.author.tag)
    })
  }
  if(args[0] === "channel-info") {
    message.channel.send("", {
      embed: new Discord.RichEmbed()
      .addField("Get guild-info", `#${message.channel.name}: "${message.channel.id}"`)
      .setColor("#ff0000")
      .setFooter("Requested by: " + message.author.tag)
    })
  }
  if(args[0] === "author-id") {
    let authorId = message.author.id
    message.channel.send('"' + authorId + '"')
  }
  if(args[0] === "emoji-list") {
    const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
    message.channel.send("", {
      embed: new Discord.RichEmbed()
      .addField("Get emoji-list", `${emojiList}`)
      .setColor("#ff0000")
      .setFooter("Requested by: " + message.author.tag)
    })
  }
}