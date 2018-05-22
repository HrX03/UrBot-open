exports.run = (bot, message, args) => {
  function thisFunction() {
	  let someString = args.join(' ');
	  let j;
    let output = "";;
	  for(j = 0; j < someString.length; j++) {
		  output += String.fromCharCode(someString)
	  }
    return output
  }
  message.channel.send(`Output: "${thisFunction()}"`)
}  