const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Attendance = sequelize.define('Attendance', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  attended_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  payment_collected: {
    type: DataTypes.FLOAT,
    allowNull: true,
    defaultValue: 0,
  },
});

module.exports = Attendance;