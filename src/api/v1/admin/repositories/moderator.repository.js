const Moderator = require("../../../../models/moderator.model");

module.exports = {
  // create moderator function
  async createModerator(moderator) {
    return await Moderator.create(moderator);
  },

  // list all the moderators without condition
  async listModerators() {
    return await Moderator.aggregate(moderatorBasePipeline());
  },

  // find one single moderator by passing the _id
  async findModeratorById(_id) {
    const res = await Moderator.aggregate([{ $match: { _id } }, ...moderatorBasePipeline()]);
    return res[0] || null;
  },
};

// common pipeline to get populated doc details
const moderatorBasePipeline = () => [
  // 1️⃣ Populate moderator.role → roles
  {
    $lookup: {
      from: "roles",
      localField: "role",
      foreignField: "_id",
      as: "role",
    },
  },
  {
    $unwind: {
      path: "$role",
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
      name: 1,
      email: 1,
      createdAt: 1,
      isActive: 1,
      permissions: 1,

      role: {
        _id: "$role._id",
        key: "$role.key",
        name: "$role.name",
        permissions: "$role.permissions",
      },

      createdBy: {
        _id: "$createdBy._id",
        name: "$createdBy.name",
        role: {
          _id: "$createdBy.role._id",
          key: "$createdBy.role.key",
          name: "$createdBy.role.name",
          permissions: "$createdBy.role.permissions",
        },
      },
    },
  },
];
