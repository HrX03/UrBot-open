const Discord = require("discord.js")
exports.run = (bot, message, args) => {
    message.channel.send("", {
     embed: new Discord.RichEmbed()
      .setTitle("Useful 3DS Apps")
      .setDescription("FOLLOW THIS ONLY IF YOUR DEVICE HAVE ALREADY CFW! \n Anemone3DS: [Download](https://github.com/astronautlevel2/Anemone3DS/releases/tag/v1.2.2) \n Checkpoint: [Download](https://github.com/BernardoGiordano/Checkpoint/releases/tag/v2.0.2) \n HBLauncher_Loader: [Download](https://github.com/yellows8/hblauncher_loader/releases/tag/v1.3) \n GodMode9: [Download](https://github.com/d0k3/GodMode9/releases/tag/v1.4.3) \n DSP1: [Download](https://github.com/zoogie/DSP1/releases/tag/v1.0) \n FBI: [Download](https://github.com/Steveice10/FBI/releases/tag/2.4.14) \n Luma3DSUpdater: [Download](https://github.com/KunoichiZ/lumaupdate/releases/tag/v2.2) \n FreeShop: can't link cause its piracy related app, google 'freeshop 3ds'")
      .setColor("#827e00")
      .setFooter("Requested by: " + message.author.tag)
    })
}