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
    if(!args[0]) {
      message.reply("Please provide link");
      return; }
    if(!message.member.voiceChannel) {
      message.reply("Please enter a voice channel before attempting to run this command again!");
      return;
    }
    if(!servers[message.guild.id]) servers[message.guild.id] = {
      queue: [args[0]]
    }
    var server = servers[message.guild.id];
    
    if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
      play(connection, message, args);
    });
}