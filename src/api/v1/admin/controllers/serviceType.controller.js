const serviceTypeService = require("../../../../modules/utils/serviceType.service");

exports.list = async (req, res, next) => {
  try {
    const data = await serviceTypeService.listActive();
    res.status(200).json({ code: 200, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res, next) => {
  try {
    const item = await serviceTypeService.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};
