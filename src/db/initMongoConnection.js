// src/db/initMongoConnection.js
require('dotenv').config();     // .env’i yükler
const mongoose = require('mongoose');

async function initMongoConnection() {
  const uri = process.env.MONGODB_URL;
  if (!uri) {
    console.error('❌ MONGODB_URL tanımlı değil! .env dosyanızı kontrol edin.');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB bağlantısı başarıyla kuruldu!');
  } catch (err) {
    console.error('❌ MongoDB bağlantı hatası:', err);
    process.exit(1);
  }
}

module.exports = initMongoConnection;
