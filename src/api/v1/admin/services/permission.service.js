const permissionRepo = require("../repositories/permission.repository");
const AppError = require("../../../../utils/AppError");
const MSG = require("../../../../constants/response-messages");
const Helper = require("../../../../utils/Helper");

module.exports = {
  async createPermission(value, sub) {
    try {
      value.createdBy = sub;
      // create permission key from the name
      value.key = Helper.generatePermissionKey(value.label); // pass name, it'll generate the KEY
      if (!value.key) throw new AppError(400, MSG.PERMISSION.NAME_INVALID);

      return await permissionRepo.createPermission(value);
    } catch (err) {
      if (err.code === 11000) throw new AppError(400, MSG.PERMISSION.EXISTS);
      else throw new AppError(400, MSG.PERMISSION.NAME_INVALID);
    }
  },

  async getAllPermissions() {
    try {
      return await permissionRepo.getPermissions();
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
