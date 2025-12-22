const moduleService = require("../../shared/services/module.service");
const responseMessage = require("../../../../constants/response-messages");

module.exports = {
  // function to create module
  async createModule(req, res, next) {
    try {
      const MODULE = await moduleService.createModule(req.validatedBody, req.user.sub); // set created by (value from req.user.sub)
      const newModule = await moduleService.getModuleDetailsById(MODULE._id); // will contain populated data
      res.status(201).json({
        status: 201,
        message: responseMessage.MODULE.CREATED,
        data: newModule,
      });
    } catch (err) {
      next(err);
    }
  },

  // function to get all modules
  async getModules(req, res, next) {
    try {
      const modules = await moduleService.getAllModules();
      res.status(200).json({
        status: 200,
        message: responseMessage.MODULE.DATA_FOUND,
        data: modules,
      });
    } catch (err) {
      next(err);
    }
  },
};
