const cache = require("../cache/permission.cache");
const roleRepo = require("../repositories/role.repository");
const AppError = require("../../../../utils/AppError");
const responseMessage = require("../../../../constants/response-messages");
const ROLES = require("../../../../constants/roles");

module.exports = {
  async createRole(value, sub) {
    try {
      value.createdBy = sub;
      value.key = ROLES.ADMIN; // will hold th e ADMIN key (this is the role key for all admin login moderators)
      return await roleRepo.create(value);
    } catch (err) {
      if (err.code === 11000) throw new AppError(400, responseMessage.ROLE.EXISTS);
    }
  },

  async getPermissionsByRoleKey(roleKey) {
    try {
      if (cache.get(roleKey)) {
        return cache.get(roleKey); // ✅ NO DB
      }

      const permissions = await roleRepo.findByKey(roleKey);
      cache.set(roleKey, permissions);

      return permissions;
    } catch (err) {
      throw new AppError(500, responseMessage.COMMON.INTERNAL_ERROR);
    }
  },

  async getAllRoles() {
    try {
      return await roleRepo.findAll();
    } catch (err) {
      throw new AppError(500, responseMessage.COMMON.INTERNAL_ERROR);
    }
  },

  async getRoleDetailsById(id) {
    try {
      return await roleRepo.findById(id);
    } catch (err) {
      throw new AppError(500, responseMessage.COMMON.INTERNAL_ERROR);
    }
  },
};
