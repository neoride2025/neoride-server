const Module = require("../../../../models/module.model");

// to create modules
exports.createModule = async (module) => {
  return await Module.create(module);
};

// function to get permissions in modules based
exports.getPermissionsGroupedByModule = async () => {
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
};

// irrespective af active all modules
exports.getAllModules = async () => {
  return await Module.find().populate({ path: "createdBy", select: "name email role" }).lean();
};

// will return only active modules
exports.getAllActiveModules = async () => {
  return await Module.find({ isActive: true }).lean();
};

// find module by id
exports.findModuleById = async (id) => {
  return await Module.findById(id).populate({ path: "createdBy", select: "name email role" }).lean();
};
