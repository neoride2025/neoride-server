const { validateSubmit } = require("../../../../modules/contact/contact.validator");
const serviceTypeService = require("../../../../modules/utils/service-type/serviceType.service");

const MSG = require("../../../../constants/responseMessages");

exports.submit = async (req, res, next) => {
  try {
    const serviceTypes = await serviceTypeService.listActive();
    const allowedKeys = serviceTypes.map((s) => s.key);
    validateSubmit(req.body, allowedKeys);

    res.status(201).json({
      status: 201,
      message: MSG.CONTACT.CREATED,
    });
  } catch (err) {
    next(err); // forward error
  }
};
