const Contact = require('../db/Contact');

async function getAllContacts() {
  return Contact.find({});
}

async function getContactById(contactId) {
  return Contact.findById(contactId);
}

module.exports = { getAllContacts, getContactById };
