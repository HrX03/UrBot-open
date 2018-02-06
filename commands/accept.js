exports.run = (bot, message, args) => {
    function randIdGen() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
    let randId = (randIdGen())
    //let role = bot.guilds.get(message.guild.id).roles.find('name', 'Little H4xx0rs');
    if(message.guild.member(message.author.id).roles.has(bot.guilds.get(message.guild.id).roles.find('name', 'Little H4xx0rs'))) {
      return message.reply('You have been already accepted!')
    }
    message.channel.send('For being accepted enter this code with a time limit of 30 secs: ' + randId)
      .then(() => {
        message.channel.awaitMessages(response => response.content === randId, {
          max: 1,
          time: 30000,
          errors: ['time'],
        })
      .then((collected) => {
          message.channel.send("You have been accepted, enjoy your stay"); //come in ping.js
        //message.guild.member(message.author.id).addRole(role)
      })
      .catch(() => {
        message.channel.send('The time limit has expired!');
      });
    });

}