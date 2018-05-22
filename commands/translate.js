let translate = require('translate');
exports.run = async (bot, message, args) => {
  let text = args.slice(2).join(' ');
  translate.from = args[0]
  translate.engine = 'yandex';
  translate.key = process.env['YANDEX_KEY'];
  let langto = args[1]
  let transl = await translate(text, langto);
  message.channel.send(transl)
}//OOh, i was thinking the bot was just sending a @someone in the chat but noNo lol