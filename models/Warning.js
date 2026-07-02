const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Warning = sequelize.define('Warning', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  reason: { type: DataTypes.STRING, allowNull: true },
}, {
  tableName: 'warnings',
});

module.exports = Warning;
