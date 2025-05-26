// src/db/initMongoConnection.js
require('dotenv').config();
const mongoose = require('mongoose');

async function initMongoConnection() {
  const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_HOST,
    MONGODB_DB,
  } = process.env;

  // Debug: env değerlerini kontrol edin
  console.log('ENV MONGODB_USER:', MONGODB_USER);
  console.log('ENV MONGODB_PASSWORD:', MONGODB_PASSWORD ? '***' : MONGODB_PASSWORD);
  console.log('ENV MONGODB_HOST:', MONGODB_HOST);
  console.log('ENV MONGODB_DB:', MONGODB_DB);

  if (!MONGODB_USER || !MONGODB_PASSWORD || !MONGODB_HOST || !MONGODB_DB) {
    console.error('❌ Eksik veya hatalı .env ayarı. Lütfen .env dosyanızı kontrol edin.');
    process.exit(1);
  }

  const uri = [
    'mongodb+srv://',
    MONGODB_USER,
    ':',
    encodeURIComponent(MONGODB_PASSWORD),
    '@',
    MONGODB_HOST,
    '/',
    MONGODB_DB,
    '?retryWrites=true&w=majority',
  ].join('');

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Mongo connection successfully established!');
  } catch (err) {
    console.error('❌ MongoDB bağlantı hatası:', err);
    process.exit(1);
  }
}

module.exports = initMongoConnection;
