const permissionRepo = require("../repositories/permission.repository");

const AppError = require("../../../../utils/AppError");
const MSG = require("../../../../constants/response-messages");

module.exports = {
  async getRolesAsGrouped() {
    return permissionRepo.getRolesAsGrouped();
  },

  async createPermission(permission) {
    return permissionRepo.createPermission(permission);
  },

  async getAllPermissions() {
    try {
      return permissionRepo.getAllPermissions();
    } catch (err) {
      console.log("err : ", err);
      if (err.code === 11000) throw new AppError(400, MSG.PERMISSION.EXISTS);
    }
  },

  async getPermissionById(id) {
    return permissionRepo.findPermissionById(id);
  },
};
