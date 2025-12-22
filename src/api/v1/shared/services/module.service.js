const moduleRepo = require("../repositories/module.repository");
const AppError = require("../../../../utils/AppError");
const responseMessage = require("../../../../constants/response-messages");
const Helper = require("../../../../utils/Helper");

module.exports = {
  async createModule(value, sub) {
    try {
      value.createdBy = req.user.sub;
      // create key for the module with the module name (use Help function)
      value.key = Helper.toCapsWithUnderscore(value.name, sub); // pass name, it'll generate the KEY
      return await moduleRepo.create(value);
    } catch (err) {
      if (err.code === 11000) throw new AppError(409, responseMessage.MODULE.EXISTS);
    }
  },

  async getPermissionsGroupedByModule() {
    try {
      return await moduleRepo.getPermissionsGroupedByModule();
    } catch (err) {
      throw new AppError(500, responseMessage.COMMON.INTERNAL_ERROR);
    }
  },

  // get all modules with creator details
  async getAllModules() {
    try {
      return await moduleRepo.findAll();
    } catch (err) {
      throw new AppError(500, responseMessage.COMMON.INTERNAL_ERROR);
    }
  },

  async getAllActiveModules() {
    try {
      return moduleRepo.findAllActive();
    } catch (err) {
      throw new AppError(500, responseMessage.COMMON.INTERNAL_ERROR);
    }
  },

  async getModuleDetailsById(id) {
    try {
      return await moduleRepo.findById(id);
    } catch (err) {
      throw new AppError(500, responseMessage.COMMON.INTERNAL_ERROR);
    }
  },
};
