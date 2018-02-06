exports.run = (bot, message, args) => {
    message.delete()
    let sayComm = args.join(' ')
    message.channel.send(`${message.author.tag} said: ${sayComm}`);
}