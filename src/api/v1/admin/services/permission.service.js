const permissionRepo = require("../repositories/permission.repository");

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
      if (err.code === 11000) {
        return {
          statusCode: 409,
          message: MSG.ROLE.NAME_EXISTS,
        };
      }
    }
  },

  async getPermissionById(id) {
    return permissionRepo.findPermissionById(id);
  },
};
