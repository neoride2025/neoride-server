const permissionService = require("../../../../modules/permission/permission.service");

exports.list = async (req, res) => {
  try {
    const data = await permissionService.listPermissions();
    res.status(200).json({
      status: 200,
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res) => {
  res.json({ message: "Permission created" });
};

exports.update = async (req, res) => {
  res.json({ message: "Permission updated", id: req.params.id });
};

exports.remove = async (req, res) => {
  res.json({ message: "Permission deleted", id: req.params.id });
};
