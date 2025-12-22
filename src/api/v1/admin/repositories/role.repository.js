const Role = require("../../../../models/role.model");

module.exports = {
  // function to create role
  async create(payload) {
    return await Role.create(payload);
  },

  // get all roles irrespective of any condition
  async findAll() {
    return Role.aggregate(roleBasePipeline());
  },

  // find role by _id (this will populate all relevant data and return)
  async findById(_id) {
    const res = await Role.aggregate([{ $match: { _id } }, ...roleBasePipeline()]);
    return res[0] || null;
  },

  // list all the role's permissions (key is the role's key not _id)
  async findByKey(key) {
    const roles = await Role.findOne({ key }, { _id: 0, permissions: 1 }).lean();
    return roles ? roles.permissions : [];
  },
};

// common pipeline to get populated doc details
const roleBasePipeline = () => {
  return [
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
    {
      $project: {
        key: 1,
        name: 1,
        createdAt: 1,
        isActive: 1,
        permissions: 1,
        createdBy: {
          _id: "$createdBy._id",
          name: "$createdBy.name",
          role: {
            _id: "$createdBy.role._id",
            key: "$createdBy.role.key",
            name: "$createdBy.role.name",
            // permissions: "$createdBy.role.permissions",
          },
        },
      },
    },
  ];
};
