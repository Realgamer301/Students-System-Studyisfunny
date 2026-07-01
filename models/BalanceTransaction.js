const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BalanceTransaction = sequelize.define('BalanceTransaction', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false, // ممكن تكون رقم سالب (خصم) أو موجب (إضافة)
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = BalanceTransaction;