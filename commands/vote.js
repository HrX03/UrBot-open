const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Vote!");
  await msg.react("👍")
  
  const reactions = await message.awaitReactions(reaction => {
    return reaction.emoji.name === "👍", {time: 30000}
  });
}