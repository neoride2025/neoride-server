const Module = require("../../../../models/module.model");

module.exports = {
  // to create modules
  async create(payload) {
    return await Module.create(payload);
  },

  // function to get permissions in modules based
  async getPermissionsGroupedByModule() {
    return await Module.aggregate([
      {
        $match: { isActive: true },
      },
      {
        $lookup: {
          from: "permissions",
          localField: "_id",
          foreignField: "module",
          as: "permissions",
        },
      },
      {
        $project: {
          _id: 0,
          name: 1,
          key: 1,
          permissions: {
            $map: {
              input: "$permissions",
              as: "p",
              in: {
                key: "$$p.key",
                label: "$$p.label",
                description: "$$p.description",
              },
            },
          },
        },
      },
      {
        $sort: { order: 1 },
      },
    ]);
  },

  // irrespective af active all modules
  async findAll() {
    return await Module.aggregate(moduleBasePipeline());
  },

  // will return only active modules
  async findAllActive() {
    return await Module.find({ isActive: true }).lean();
  },

  // find module by id
  async findById(_id) {
    const res = await Role.aggregate([{ $match: { _id } }, ...moduleBasePipeline()]);
    return res[0] || null;
  },
};

// common pipeline to get populated doc details
const moduleBasePipeline = () => [
  // 1️⃣ Join createdBy → moderators
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

  // 2️⃣ Join createdBy.role → roles
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

  // 3️⃣ Shape output (same as populate select)
  {
    $project: {
      name: 1,
      createdAt: 1,
      isActive: 1,

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
