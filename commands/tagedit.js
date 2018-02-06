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
  const PREFIX = "u!tagedit" + tagName + " ";
  const splitArgs = message.content.slice(PREFIX.length).split(' ');
  const tagDescription = splitArgs.join(' ');

// equivalent to: UPDATE tags (descrption) values (?) WHERE name='?';
  const affectedRows = await Tags.update({ description: tagDescription }, { where: { name: tagName } });
  if (affectedRows > 0) {
    return message.reply(`Tag ${tagName} was edited.`);
  }
  return message.reply(`Could not find a tag with name ${tagName}.`);
}