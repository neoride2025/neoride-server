const Permission = require("../../../../models/permission.model");

module.exports = {
  async getAllPermissions() {
    return Permission.find().populate([{ path: "createdBy", select: "name email role isActive" }, {path: "module", select: "name"}]).lean();
  },

  async createPermission(permission) {
    return Permission.create(permission);
  },

  async findPermissionById(id) {
    return Permission.findById(id).populate([{ path: "createdBy", select: "name email role isActive" }, {path: "module", select: "name"}]).lean();
  },
};
