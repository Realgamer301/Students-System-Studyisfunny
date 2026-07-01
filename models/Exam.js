const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Exam = sequelize.define('Exam', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, // مثال: "امتحان شهر أكتوبر"
  },
  max_score: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 100,
  },
  exam_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Exam;