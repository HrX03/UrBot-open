const Discord = require("discord.js")
exports.run = (bot, message, args) => {
    message.channel.send("", {
     embed: new Discord.RichEmbed()
       .setTitle("Ban prevention page")
       .setDescription("1. TURN OFF WIFI \n2. Go to Friend List, click Settings in the corner of the screen, go to settings, and DISABLE Share Currently Playing Game. and blank your Favorite Game. \n3. Go to System Settings -> Internet Settings -> SpotPass -> Sending of System Information; turn it OFF. After these steps, you may turn Wi-Fi back on.")
       .setColor("#827e00")
       .setFooter("Requested by: " + message.author.tag)
  });
}