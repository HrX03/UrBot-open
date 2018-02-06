exports.run = (bot, message, args) => {
  if(message.author.id === "270644886758359051") {
    message.channel.send('Bye my bois!')
    process.kill(process.pid)
  } else return;
}