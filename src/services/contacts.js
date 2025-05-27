const Contact = require('../db/models/Contact');

async function getAllContacts() {
  return Contact.find({});
}

async function getContactById(contactId) {
  return Contact.findById(contactId);
}

module.exports = { getAllContacts, getContactById };
