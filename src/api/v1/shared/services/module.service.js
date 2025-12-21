const moduleRepo = require("../repositories/module.repository");

const MSG = require("../../../../constants/response-messages");

module.exports = {
  async createModule(module) {
    try {
      return await moduleRepo.createModule(module);
    } catch (err) {
      if (err.code === 11000) {
        throw {
          statusCode: 409,
          message: MSG.MODULE.EXISTS,
        };
      }
    }
  },

  async getPermissionsGroupedByModule() {
    try {
      return moduleRepo.getPermissionsGroupedByModule();
    } catch (err) {
      console.log("err : ", err);
      return err;
    }
  },

  // get all modules with creator details
  async getAllModules() {
    try {
      return await moduleRepo.getAllModules();
    } catch (err) {
      console.log("err : ", err);
      return err;
    }
  },

  async getAllActiveModules() {
    try {
      return moduleRepo.getAllActiveModules();
    } catch (err) {
      console.log("err : ", err);
      return err;
    }
  },

  async getModuleById(id) {
    try {
      return await moduleRepo.findModuleById(id);
    } catch (err) {
      console.log("err : ", err);
      return err;
    }
  },
};
