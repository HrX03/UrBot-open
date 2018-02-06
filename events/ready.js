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
exports.run = async (bot) => {
  bot.user.setActivity({
          status: "online",
          activity: {
            name: "type u!help | just approved on DBL :)",
            type: 0,
          }
        })
  Tags.sync();
  console.log(`Logged in as ${bot.user.tag}!`);
}