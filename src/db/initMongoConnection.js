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

  const uri = `mongodb+srv://izzetkeser359:<db_password>@cluster0.apeivnl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('Mongo connection successfully established!');
}

module.exports = initMongoConnection;