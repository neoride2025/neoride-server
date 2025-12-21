const moduleRepo = require("../repositories/module.repository");

const AppError = require("../../../../utils/AppError");

const MSG = require("../../../../constants/response-messages");

module.exports = {
  async createModule(module) {
    try {
      return await moduleRepo.createModule(module);
    } catch (err) {
      if (err.code === 11000) throw new AppError(409, MSG.MODULE.EXISTS);
    }
  },

  async getPermissionsGroupedByModule() {
    try {
      return moduleRepo.getPermissionsGroupedByModule();
    } catch (err) {
      throw new AppError(500, MSG.COMMON.INTERNAL_ERROR);
    }
  },

  // get all modules with creator details
  async getAllModules() {
    try {
      return await moduleRepo.getAllModules();
    } catch (err) {
      throw new AppError(500, MSG.COMMON.INTERNAL_ERROR);
    }
  },

  async getAllActiveModules() {
    try {
      return moduleRepo.getAllActiveModules();
    } catch (err) {
      throw new AppError(500, MSG.COMMON.INTERNAL_ERROR);
    }
  },

  async getModuleById(id) {
    try {
      return await moduleRepo.findModuleById(id);
    } catch (err) {
      throw new AppError(500, MSG.COMMON.INTERNAL_ERROR);
    }
  },
};
