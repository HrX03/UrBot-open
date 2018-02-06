const Discord = require('discord.js');

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

exports.run = (bot, message, args) => {
    message.channel.send('Ping?').then(m => m.edit(`Pong! Latency : ${m.createdTimestamp - message.createdTimestamp}ms. API Latency ${Math.round(bot.ping)}ms`) );
}