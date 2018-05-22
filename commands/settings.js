const fs = require('fs')
const settings = require('./settings.json')
exports.run = (bot, message, args) => {
  const prefix = args[0]
  const lang = args[1]
  
  if(!args) {
    message.channel.send(`The correct usage of this command is ${settings[message.guild.id].prefix}settings <prefix> <language>`)
  } else if(!prefix) {
    message.channel.send('You are missing the prefix!')
  } else if(!lang) {
    message.channel.send('You are missing the language!')
  } else {
    settings[message.guild.id] = {
      prefix: prefix,
      lang: lang
    }
    fs.writeFile("./commands/settings.json", JSON.stringify(settings), (err) => {
      if (err) console.error(err)
    })
    message.channel.send('Prefix and language successfully changed!')
  }
}