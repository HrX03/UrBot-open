exports.run = async (bot, message, args) => {
  const nsfwWords = ["gay", "lesbian", "porn", "nsfw", "fuck", "dick", "vagina", "pussy", "penis", "sex", "fingerbang", "fingerbanging", "blowjob", "rule34", "r34"];
  if( nsfwWords.some(word => message.content.includes(word)) ) {
    if(!message.channel.nsfw) {
    return message.reply('You cant search NSFW things in here!')
    }
  }
  let searchContent = args.join('+')
  message.channel.send(`Here is the result of your search: "https://www.reddit.com/r/all/search?q=${searchContent}&restrict_sr=&sort=relevance&t=all"`)
}