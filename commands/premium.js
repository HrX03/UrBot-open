let fs = require('fs')
let premium = JSON.parse(fs.readFileSync("./premium.json", "utf8"));
exports.run = (bot, message, args) => {
  if(!premium[message.member.id]) {
    premium[message.member.id] = {
      activated : 0
    }
    fs.writeFileSync("./premium.json", JSON.stringify(premium), (err) => {
      if (err) console.error(err)
    })
  }
  if(premium[message.member.id].activated === 1) {
    message.channel.send('GG! You are premium!')
  } else if(premium[message.member.id].activated === 0) {
    message.channel.send('Oops, it seems like you are not premium!')
  }
}