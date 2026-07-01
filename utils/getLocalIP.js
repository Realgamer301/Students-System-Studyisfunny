const os = require('os');

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // نبحث عن IP من نوع IPv4، ومش "داخلي" (يعني مش 127.0.0.1)
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost'; // لو ملقيناش، نرجع القيمة الافتراضية
}

module.exports = getLocalIP;