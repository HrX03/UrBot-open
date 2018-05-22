const Discord = require("discord.js")
exports.run = (bot, message, args) => {
  message.channel.send("", {
     embed: new Discord.RichEmbed()
       .setTitle("Guide page")
       .setDescription("Here you can find all the links of your favorite console guides!: \n 3DS: https://3ds.guide \n WiiU: https://wiiu.guide \n Wii: https://wii.guide \n DSi: https://dsiguide.me")
       .setColor("#ff0000")
       .setFooter("Requested by: " + message.author.tag)
  });
}