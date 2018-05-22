let fs = require('fs')
exports.run = (bot, message, args) => {
  let friendjson = JSON.parse(fs.readFileSync("./commands/friendCodes.json", "utf8"));
  if(!friendjson[message.member.id]) friendjson[message.member.id] = {
    n3ds: null,
    wiiu: null,
    switch: null
  } && fs.writeFile("./friendCodes.json", JSON.stringify(friendjson), (err) => {
    if (err) console.error(err)
  })
  let code = args.slice(1).join(' ');
  if(!args[0]) {
    message.reply('This command has to be used like this: u!friend-code <n3ds, wiiu, switch> <friend code>.')
  } else if(args[0].toLowerCase() === 'n3ds') {
    if(!code) {
      message.channel.send('You cant save an empty friend code!')
    } else {
      friendjson[message.member.id] = {
        n3ds: code,
        wiiu: friendjson[message.member.id].wiiu,
        switch: friendjson[message.member.id].switch
      };
      message.channel.send('Friend code for n3ds saved successfully!');
    }
  } else if(args[0].toLowerCase() === 'get') {
    if(!code) {
      message.channel.send('Please define a valid console!')
    } else if(code.toLowerCase() === 'n3ds'){
      if(friendjson[message.member.id].n3ds === null) return message.channel.send('You havent saved any code for this console')
      message.channel.send('This is your n3ds code that you saved: ' + friendjson[message.member.id].n3ds)
    }
  }
}