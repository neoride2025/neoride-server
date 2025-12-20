const moduleService = require("../../../../modules/module/module.service");

const MSG = require("../../../../constants/responseMessages");

exports.list = async (req, res) => {
  try {
    const data = await moduleService.listModules();
    res.status(200).json({
      status: 200,
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res) => {
  try {
    const allowedKeys = serviceTypes.map((s) => s.key);
    validateSubmit(req.body, allowedKeys);
    contactService.submit(req.body);
    res.status(201).json({
      status: 201,
      message: MSG.MODULE.CREATION_SUCCESS,
    });
  } catch (err) {
    console.log("err : ", err);
    next(err); // forward error
  }
};

exports.update = async (req, res) => {
  res.json({ message: "Module updated", id: req.params.id });
};

exports.remove = async (req, res) => {
  res.json({ message: "Module deleted", id: req.params.id });
};
