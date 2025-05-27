require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pino = require('pino-http')();

const {
  handleGetAllContacts,
  handleGetContactById,
} = require('./controllers/contacts');

function setupServer() {
  const app = express();
  app.use(cors());
  app.use(pino);
  app.use(express.json());

  app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Contacts API! Try /contacts' });
  });

  app.get('/contacts', handleGetAllContacts);
  app.get('/contacts/:contactId', handleGetContactById);

  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  return app;
}

module.exports = setupServer;
