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

  const uri = `mongodb+srv://izzetkeser359:EyLD98MhNShzUIxS@cluster0.u38pi7i.mongodb.net/contactsDB?retryWrites=true&w=majority`;

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('Mongo connection successfully established!');
}

module.exports = initMongoConnection;