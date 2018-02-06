const request = require('request');
exports.run = (bot, message, args) => {
   var term = 'cats';
    term = encodeURI(term)
    request('http://api.giphy.com/v1/gifs/search?q=' + term + '&rating=r&api_key=dc6zaTOxFJmzC', function (error, response, body) {
		  if (!error && response.statusCode == 200) {
        let content =  JSON.parse(body)
        let item = Math.floor(Math.random() * 10)
        let gif = content.data[item].images.fixed_height.url
        message.channel.send(`Here is your random cat :cat:: \n${gif}`)
        console.log(`This gif was requested by: ${message.author.tag}\nSearch term: ${term}\nLink to gif: ${gif}`);
     }
    })
}