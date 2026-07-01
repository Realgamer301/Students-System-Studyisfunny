const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const WatchProgress = sequelize.define('WatchProgress', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  watched_seconds: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0, // أقصى نقطة وصلها الطالب في المشاهدة
  },
});

module.exports = WatchProgress;