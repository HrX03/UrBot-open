exports.run = (bot, message, args) => {
  function makePass(num) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-_";
    for (var i = 0; i < num; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
  let lenght = args[0]
  message.channel.send('Here is your pass: ' + `${makePass(lenght)}`)
}