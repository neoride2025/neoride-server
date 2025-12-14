const { validateSubmit } = require("../../../../modules/contact/contact.validator");
const serviceTypeService = require("../../../../modules/utils/service-type/serviceType.service");

const MSG = require("../../../../constants/responseMessages");
const contactService = require("../../../../modules/contact/contact.service");

exports.submit = async (req, res, next) => {
  try {
    const serviceTypes = await serviceTypeService.list();
    const allowedKeys = serviceTypes.map((s) => s.key);
    validateSubmit(req.body, allowedKeys);
    contactService.submit(req.body);
    res.status(201).json({
      status: 201,
      message: MSG.CONTACT.CREATION_SUCCESS,
    });
  } catch (err) {
    console.log('err " ', err);
    next(err); // forward error
  }
};
