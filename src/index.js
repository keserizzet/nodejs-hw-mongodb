// src/index.js
require('dotenv').config();
const initMongoConnection = require('./db/models/initMongoConnection');
const setupServer = require('./server');

(async () => {
  await initMongoConnection();
  setupServer();
})();
