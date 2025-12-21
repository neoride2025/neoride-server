const moduleService = require("../../shared/services/module.service");

const MSG = require("../../../../constants/response-messages");

const { createModuleSchema } = require("../../../../schemas/module.schema");

exports.createModule = async (req, res, next) => {
  try {
    const { error, value } = createModuleSchema.validate(req.body, {
      abortEarly: true,
      stripUnknown: true,
    });

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    // value is sanitized & safe
    const module = await moduleService.createModule(value); // will contain raw document data
    const newModule = await moduleService.getModuleById(module._id); // will contain populated data
    res.status(201).json({
      status: 201,
      message: MSG.MODULE.CREATED,
      data: newModule,
    });
  } catch (err) {
    console.log('err : ', err);
    next(err);
  }
};

exports.getAllModules = async (req, res, next) => {
  try {
    const modules = await moduleService.getAllModules();
    res.status(200).json({
      status: 200,
      message: MSG.MODULE.DATA_FOUND,
      data: modules,
    });
  } catch (err) {
    next(err);
  }
};
