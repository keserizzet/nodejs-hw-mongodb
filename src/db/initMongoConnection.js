const mongoose = require('mongoose');

async function initMongoConnection() {
  const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_URL,
    MONGODB_DB,
  } = process.env;

  if (!MONGODB_USER || !MONGODB_PASSWORD || !MONGODB_URL || !MONGODB_DB) {
    throw new Error('MongoDB bağlantı bilgileri eksik!');
  }

  const uri = `mongodb+srv://${MONGODB_USER}:${encodeURIComponent(
    MONGODB_PASSWORD
  )}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority`;

  await mongoose.connect(uri);

  console.log('Mongo connection successfully established!');
}

module.exports = initMongoConnection;
