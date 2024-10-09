const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Message = sequelize.define('Message', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isModerator: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Message.belongsTo(User, { foreignKey: 'userId' });

module.exports = Message;
