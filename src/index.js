// src/index.js
require('dotenv').config();

const initMongoConnection = require('./db/initMongoConnection');
const setupServer = require('./server');

async function main() {
  try {
    await initMongoConnection();
    setupServer();
  } catch (err) {
    console.error('Uygulama başlatılamadı:', err);
    process.exit(1);
  }
}

main();
