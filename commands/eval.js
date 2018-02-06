const Discord = require('discord.js')
var prefix = ")"
exports.run = (bot, message, args) => {    
    const clean = text => {
        if (typeof(text) === "string")
          return text.replace(`//g, "" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203)`);
        else
            return text;
      }
      if(message.author.id !== "270644886758359051") return message.reply("Not authorized, sorry");
      try {
        const code = args.join(" ");
        let evaled = eval(code);
  
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
     
          message.channel.send(clean(evaled), {code:"xl"});
        } catch (err) {
          message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
}