const Permission = require("../../../../models/permission.model");

module.exports = {
  async createPermission(permission) {
    return await Permission.create(permission);
  },

  async getAllPermissions() {
    return await Permission.find()
      .populate([
        { path: "createdBy", select: "name email role isActive" },
        { path: "module", select: "name" },
      ])
      .lean();
  },

  async findPermissionById(id) {
    return await Permission.findById(id)
      .populate([
        { path: "createdBy", select: "name email role isActive" },
        { path: "module", select: "name" },
      ])
      .lean();
  },
};
