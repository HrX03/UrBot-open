exports.run = (bot, message, args) =>  {
  setInterval(function() {
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + " @ " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds()
    var choosentime = args.join(' ');
      if (datetime === choosentime) {
        message.channel.send('<@270644886758359051> test')
        return;
      }
  }, 1000)
}