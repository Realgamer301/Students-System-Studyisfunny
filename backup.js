require('dotenv').config();
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const backupDir = path.join(__dirname, 'backups');
if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir);

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const fileName = `backup_${timestamp}.sql`;
const filePath = path.join(backupDir, fileName);

const command = `mysqldump -u ${process.env.DB_USER} ${process.env.DB_PASSWORD ? `-p${process.env.DB_PASSWORD}` : ''} ${process.env.DB_NAME} > "${filePath}"`;

exec(command, (error) => {
  if (error) {
    console.error('❌ فشل النسخ الاحتياطي:', error.message);
    return;
  }
  console.log(`✅ تم عمل نسخة احتياطية بنجاح: ${fileName}`);

  // مسح أي نسخة أقدم من 30 يوم (عشان الفولدر منيكبرش بلا حدود)
  const files = fs.readdirSync(backupDir);
  const now = Date.now();
  files.forEach(file => {
    const filePath2 = path.join(backupDir, file);
    const stats = fs.statSync(filePath2);
    const ageInDays = (now - stats.mtimeMs) / (1000 * 60 * 60 * 24);
    if (ageInDays > 30) fs.unlinkSync(filePath2);
  });
});