// src/scripts/seed.js
require('dotenv').config();              // .env’i yükler
const mongoose = require('mongoose');
const Contact = require('../db/models/Contact');
const contacts = require('../../contacts.json');  // proje kökündeki dosya

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('🌱 MongoDB’ye bağlandı, seed başlatılıyor…');

    // İsterseniz önce temizleyin:
    await Contact.deleteMany({});
    console.log('🗑️  contacts koleksiyonu temizlendi');

    // Verileri ekleyin:
    const inserted = await Contact.insertMany(contacts);
    console.log(`✅ ${inserted.length} kayıt eklendi.`);

    process.exit(0);
  } catch (err) {
    console.error('❌ Seed hatası:', err);
    process.exit(1);
  }
}

seed();
