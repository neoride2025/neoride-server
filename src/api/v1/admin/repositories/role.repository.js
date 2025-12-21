const Role = require("../../../../models/role.model");

module.exports = {
  async createRole(role) {
    return await Role.create(role);
  },

  async listAllRoles() {
    return await Role.find().populate({ path: "createdBy", select: "name email role isActive" }).lean();
  },

  async getPermissionsByRoleKey(roleKey) {
    const roles = await Role.findOne({ key: roleKey }, { _id: 0, permissions: 1 }).lean();
    return roles ? roles.permissions : [];
  },
};
