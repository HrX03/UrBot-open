const Discord = require("discord.js")
const exec = require('child_process').exec;
exports.run = (bot, message, args) => {
  if(message.author.id === "270644886758359051") {
    const start = process.hrtime();
    exec(`${args.join(" ")}`, (error, stdout) => {
      let response = (error || stdout);
      if (response.length > 1024) console.log(response), response = 'Too long to be printed (content got console logged)';
      const end = process.hrtime(start);
      message.channel.send("", {
        embed: new Discord.RichEmbed()
        .setTitle("Exec!")
        .setDescription("```"+response+"```")
        .setTimestamp()
        .setFooter("Thanks to " + bot.users.find("id", "321137772054183947").tag + " for the code!")
        .setColor("RANDOM")
      })
    });
  }
}