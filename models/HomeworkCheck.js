const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const HomeworkCheck = sequelize.define('HomeworkCheck', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  status: {
    type: DataTypes.ENUM('complete', 'incomplete', 'no_steps', 'not_done'),
    allowNull: false,
  },
}, {
  tableName: 'homeworkchecks',
});

module.exports = HomeworkCheck;
