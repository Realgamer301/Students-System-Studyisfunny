const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CenterSubjectSeries = sequelize.define('CenterSubjectSeries', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  base_number: {
    type: DataTypes.INTEGER,
    allowNull: false, // مثلاً 5000 أو 4000
  },
}, {
  tableName: 'centersubjectseries',
});

module.exports = CenterSubjectSeries;
