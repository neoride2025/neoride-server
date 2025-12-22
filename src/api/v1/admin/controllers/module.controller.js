const moduleService = require("../../shared/services/module.service");

const MSG = require("../../../../constants/response-messages");

const { createModuleSchema } = require("../../../../schemas/module.schema");

module.exports = {
  async createModule(req, res, next) {
    try {
      const { error, value } = createModuleSchema.validate(req.body, {
        abortEarly: true,
        stripUnknown: true,
      });

      if (error) {
        return res.status(400).json({
          status: 400,
          message: error.details[0].message,
        });
      }
      // value is sanitized & safe
      const MODULE = await moduleService.createModule(value, req.user.sub); // set created by (value from req.user.sub)
      const newModule = await moduleService.getModuleById(MODULE._id); // will contain populated data
      res.status(201).json({
        status: 201,
        message: MSG.MODULE.CREATED,
        data: newModule,
      });
    } catch (err) {
      next(err);
    }
  },

  async getAllModules(req, res, next) {
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
  },
};
