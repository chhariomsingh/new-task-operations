const { Sequelize } = require('sequelize');
const config = require('../config/config.json').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Task = require('./task')(sequelize, Sequelize);
db.TaskMembers = require('./taskMembers')(sequelize, Sequelize);

db.User.belongsToMany(db.Task, { through: db.TaskMembers, foreignKey: 'userId' });
db.Task.belongsToMany(db.User, { through: db.TaskMembers, foreignKey: 'taskId' });

module.exports = db;
