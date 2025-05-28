// src/controllers/contacts.js
const { getAllContacts, getContactById } = require('../services/contacts');

async function handleGetAllContacts(req, res, next) {
  try {
    const contacts = await getAllContacts();
    return res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (err) {
    console.error('Error in handleGetAllContacts:', err);
    return next(err);
  }
}

async function handleGetContactById(req, res, next) {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);
    if (!contact) {
      // İşte burası: 404 + yalnızca message alanı
      return res.status(404).json({ message: 'Contact not found' });
    }
    // Varsa 200 + detaylı yanıt
    return res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  } catch (err) {
    next(err);
  }
}


module.exports = {
  handleGetAllContacts,
  handleGetContactById,
};