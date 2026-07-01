const selfsigned = require('selfsigned');
const fs = require('fs');
const path = require('path');

async function generate() {
  console.log('بداية تشغيل السكريبت...');

  const certsDir = path.join(__dirname, 'certs');
  const certPath = path.join(certsDir, 'cert.pem');
  const keyPath = path.join(certsDir, 'key.pem');

  if (!fs.existsSync(certsDir)) {
    fs.mkdirSync(certsDir, { recursive: true });
    console.log('تم إنشاء فولدر certs');
  }

  try {
    const attrs = [{ name: 'commonName', value: 'localhost' }];
    console.log('بدء توليد الشهادة...');

    const result = await selfsigned.generate(attrs, { days: 3650, keySize: 2048 });

    console.log('نتيجة التوليد:', Object.keys(result || {}));

    if (!result || !result.cert || !result.private) {
      console.error('❌ النتيجة مش بالشكل المتوقع:', result);
      process.exit(1);
    }

    fs.writeFileSync(certPath, result.cert);
    fs.writeFileSync(keyPath, result.private);

    console.log('✅ تم إنشاء شهادة SSL بنجاح');
    console.log('مكان الملفات:', certsDir);
  } catch (error) {
    console.error('❌ حصل خطأ:', error.message);
    console.error(error.stack);
  }
}

generate();