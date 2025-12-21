const cache = require("../cache/permission.cache");
const roleRepo = require("../repositories/role.repository");

const AppError = require("../../../../utils/AppError");
const MSG = require("../../../../constants/response-messages");

module.exports = {
  async createRole(role) {
    try {
      return await roleRepo.createRole(role);
    } catch (err) {
      if (err.code === 11000) throw new AppError(400, MSG.ROLE.EXISTS);
    }
  },

  async getPermissionsByRoleKey(roleKey) {
    if (cache.get(roleKey)) {
      return cache.get(roleKey); // ✅ NO DB
    }

    const permissions = await roleRepo.getPermissionsByRoleKey(roleKey);
    cache.set(roleKey, permissions);

    return permissions;
  },

  async getAllRoles() {
    try {
      return await roleRepo.listAllRoles();
    } catch (err) {
      throw new AppError(500, MSG.COMMON.INTERNAL_ERROR);
    }
  },
};
