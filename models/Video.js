const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Video = sequelize.define('Video', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false, // مثال: "التفاضل - الجزء الأول"
  },
}, {
  tableName: 'videos',
});

module.exports = Video;
