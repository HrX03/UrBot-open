const Discord = require("discord.js")
const YTDL = require('ytdl-core');
const nodeopus = require('node-opus');
const ffmpeg = require('ffmpeg');
var servers = {};
function play(connection, message, args) {
  var server = servers[message.guild.id];
  server.dispatcher = connection.playStream(YTDL(args[0]), {filter: "audioonly"});
  server.queue.shift();
  server.dispatcher.on("end", function() {
    if (server.queue[0]) play(connection, message);
    else connection.disconnect();
  });
}
exports.run = (bot, message, args) => {
    const voiceChannel = message.member.voiceChannel
    voiceChannel.join();
    message.channel.send('Connected!')
}