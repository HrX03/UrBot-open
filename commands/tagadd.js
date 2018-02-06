const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    // SQLite only
    storage: 'database.sqlite',
});
const Tags = sequelize.define('tags', {
    name: {
        type: Sequelize.STRING,
        unique: true,
    },
    description: Sequelize.TEXT,
    username: Sequelize.STRING,
    usage_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
});
exports.run = async (bot, message, args) => {
  const tagName = args[0];
  const PREFIX = "u!tagadd" + tagName + " ";
  const splitArgs = message.content.slice(PREFIX.length).split(' ');
  const tagDescription = splitArgs.join(' ');
  if(tagName === undefined) {
    return message.reply("You can't add an empty tag!")
  }

  try {
    // equivalent to: INSERT INTO tags (name, descrption, username) values (?, ?, ?);
    const tag = await Tags.create({
        name: tagName,
        description: tagDescription,
        username: message.author.username,
    });
    return message.reply(`Tag ${tag.name} added.`);
  }
  catch (e) {
    if (e.name === 'SequelizeUniqueConstraintError') {
        return message.reply('That tag already exists.');
    }
    return message.reply('Something went wrong with adding a tag.');
  } 
}