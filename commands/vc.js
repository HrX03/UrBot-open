const Discord = require("discord.js")
exports.run = (bot, message, args) => {
  let msg = args.join(' ')
    let vs = bot.channels.findAll("name", "vc")
    message.delete()
    vs.forEach(channel => {
    if (channel.type == "text") {
        if(message.author.id === "270644886758359051") {
            const embed = new Discord.RichEmbed()
            .setTitle("Virtual Channel")
            .setAuthor("Owner : " + message.author.username+"#"+message.author.discriminator /*, message.author.avatarURL*/)
            .setColor("#ff0000")
            .setDescription(msg)
            .setFooter(message.guild.name.replace(/`/g,"").replace(/_/g,"").replace(/\*/g,""))
            .setThumbnail(message.author.avatarURL);
        channel.send({embed})
          } else {
    const embed = new Discord.RichEmbed()
            .setTitle("Virtual Channel")
            .setAuthor(message.author.username+"#"+message.author.discriminator /*, message.author.avatarURL*/)
            .setColor("#ff0000")
            .setDescription(msg)
            .setFooter(message.guild.name.replace(/`/g,"").replace(/_/g,"").replace(/\*/g,""))
            .setThumbnail(message.author.avatarURL);
        channel.send({embed}).then(message.channel.stopTyping(true))
        }
    }
    })
}
