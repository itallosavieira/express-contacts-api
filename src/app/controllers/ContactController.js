const ConactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ConactsRepository.findAll();

    response.json(contacts);
  }

  show(request, response) {
    response.json(request.params);
  }

  store() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = new ContactController();
