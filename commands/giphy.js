const request = require('request');
exports.run = (bot, message, args) => {
  const nsfwWords = ["gay", "lesbian", "anal", "anus", "porn", "nsfw", "fuck", "dick", "vagina", "pussy", "penis", "sex", "fingerbang", "fingerbanging", "blowjob", "rule34", "r34"];
  if(nsfwWords.some(word => message.content.includes(word)) ) {
    if(!message.channel.nsfw) {
    return message.reply('You cant search NSFW things in here!')
    }
  }

  var term = args.join(' ');
    term = encodeURI(term)
    request('http://api.giphy.com/v1/gifs/search?q=' + term + '&rating=r&api_key=dc6zaTOxFJmzC', function (error, response, body) {
		  if (!error && response.statusCode == 200) {
        let content =  JSON.parse(body)
        let item = Math.floor(Math.random() * 10)
        let gif = content.data[item].images.fixed_height.url
        message.channel.send(`This gif was requested by: ${message.author.tag}\nSearch term: ${args.join(' ')}\nLink to gif: ${gif}`)
        console.log(`This gif was requested by: ${message.author.tag}\nSearch term: ${args.join(' ')}\nLink to gif: ${gif}`);
     }
  })
}