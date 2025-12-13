const contactService = require('../../../../modules/contact/contact.service');

exports.list = async (req, res, next) => {
  try {
    const data = await contactService.list();
    res.json(data);
  } catch (err) {
    next(err);
  }
};
