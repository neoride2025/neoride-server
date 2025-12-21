const permissionRepo = require("../repositories/permission.repository");

const AppError = require("../../../../utils/AppError");
const MSG = require("../../../../constants/response-messages");

module.exports = {
  async createPermission(permission) {
    try {
      return await permissionRepo.createPermission(permission);
    } catch (err) {
      if (err.code === 11000) throw new AppError(400, MSG.PERMISSION.EXISTS);
    }
  },

  async getAllPermissions() {
    try {
      return await permissionRepo.getAllPermissions();
    } catch (err) {
      throw new AppError(500, MSG.COMMON.INTERNAL_ERROR);
    }
  },

  async getPermissionById(id) {
    try {
      return await permissionRepo.findPermissionById(id);
    } catch (err) {
      throw new AppError(500, MSG.COMMON.INTERNAL_ERROR);
    }
  },
};
