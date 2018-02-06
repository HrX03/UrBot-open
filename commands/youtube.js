exports.run = async (bot, message, args) => {
  let searchContent = args.join('+')
  message.channel.send(`Here is the result of your search: "https://www.youtube.com/results?search_query=${searchContent}"`)
}