const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Itallo',
    phone: '11988775544',
    email: 'itallo@example.com',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'Leticia',
    phone: '11966443322',
    email: 'leticia@example.com',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
