require('dotenv').config();
const sequelize = require('./config/database');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('./models/associations')();

async function seedAdmin() {
  try {
    await sequelize.sync();

    const existing = await User.findOne({ where: { username: 'admin' } });
    if (existing) {
      console.log('⚠️ يوجد أدمن بالفعل بنفس اليوزرنيم');
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);

    await User.create({
      name: 'الأدمن الرئيسي',
      username: 'admin',
      password: hashedPassword,
      role: 'admin',
    });

    console.log('✅ تم إنشاء حساب الأدمن بنجاح');
    console.log('   اليوزرنيم: admin');
    console.log('   الباسورد: admin123');
    process.exit(0);
  } catch (error) {
    console.error('❌ خطأ:', error.message);
    process.exit(1);
  }
}

seedAdmin();