exports.run = async (bot, message, args) => {
  await message.delete();
  let users = [];
  let emojiList = ['(⁄ ⁄•⁄ω⁄•⁄ ⁄)', '(◕‿◕✿)', '¯\_(ツ)_/¯', '(∩ ͡° ͜ʖ ͡°)⊃━✿✿✿✿✿✿', '✿ ͡◕ ᴗ◕)つ━━✫・o。', '(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. o ･ ｡ﾟ', 'ヽ༼ ಠ益ಠ ༽ﾉ', '(╯°□°）╯︵ ┻━┻', 'ಠ_ಠ', '༼ つ ◕_◕ ༽つ', '¯(°_o)/¯']
  users = message.guild.members.map(u => u.id);
  let randomUser = users[Math.floor(Math.random() * users.length)];
  let user = bot.users.get(randomUser).username
  let emoji = emojiList[Math.floor(Math.random() * emojiList.length)]
  message.channel.send(`@someone ${emoji} ***(${user})***`)
}