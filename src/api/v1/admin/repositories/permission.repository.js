const Permission = require("../../../../models/permission.model");

module.exports = {
  async createPermission(payload) {
    return await Permission.create(payload);
  },

  async getPermissions() {
    return await Permission.aggregate(permissionBasePipeline());
  },

  async findPermissionById(_id) {
    const res = await Permission.aggregate([{ $match: { _id } }, ...moderatorBasePipeline()]);
    return res[0] || null;
  },
};

// common pipeline to get populated doc details
const permissionBasePipeline = () => [
  // 1️⃣ Populate module → modules
  {
    $lookup: {
      from: "modules",
      localField: "module",
      foreignField: "_id",
      as: "module",
    },
  },
  {
    $unwind: {
      path: "$module",
      preserveNullAndEmptyArrays: true,
    },
  },

  // 2️⃣ Populate createdBy → moderators
  {
    $lookup: {
      from: "moderators",
      localField: "createdBy",
      foreignField: "_id",
      as: "createdBy",
    },
  },
  {
    $unwind: {
      path: "$createdBy",
      preserveNullAndEmptyArrays: true,
    },
  },

  // 3️⃣ Populate createdBy.role → roles
  {
    $lookup: {
      from: "roles",
      localField: "createdBy.role",
      foreignField: "_id",
      as: "createdBy.role",
    },
  },
  {
    $unwind: {
      path: "$createdBy.role",
      preserveNullAndEmptyArrays: true,
    },
  },

  // 4️⃣ Final projection
  {
    $project: {
      key: 1,
      label: 1,
      description: 1,
      isActive: 1,
      createdAt: 1,

      module: {
        _id: "$module._id",
        key: "$module.key",
        name: "$module.name",
      },

      createdBy: {
        _id: "$createdBy._id",
        name: "$createdBy.name",
        email: "$createdBy.email",
        role: {
          _id: "$createdBy.role._id",
          key: "$createdBy.role.key",
          name: "$createdBy.role.name",
        },
      },
    },
  },
];
