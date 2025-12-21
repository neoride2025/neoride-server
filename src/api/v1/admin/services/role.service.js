const cache = require("../cache/permission.cache");
const roleRepo = require("../repositories/role.repository");

const MSG = require("../../../../constants/response-messages");

module.exports = {
  async createRole(role) {
    try {
      return await roleRepo.createRole(role);
    } catch (err) {
      if (err.code === 11000) {
        return {
          statusCode: 409,
          message: MSG.ROLE.NAME_EXISTS,
        };
      }
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
      return roleRepo.listAllRoles();
    } catch (err) {
      console.log("err : ", err);
      return err;
    }
  },
};
