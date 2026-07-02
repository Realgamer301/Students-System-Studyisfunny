const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Subject = sequelize.define('Subject', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  default_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 80,
  },
}, {
  tableName: 'subjects',
});

module.exports = Subject;
