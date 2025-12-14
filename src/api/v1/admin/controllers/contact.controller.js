const contactService = require("../../../../modules/contact/contact.service");

exports.list = async (req, res, next) => {
  try {
    console.log("req came");
    const data = await contactService.list();
    res.status(200).json({
      status: 200,
      data
    });
  } catch (err) {
    next(err);
  }
};
