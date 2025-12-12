const service = require("../services/user.service");

exports.createUser = async (req, res) => {
    console.log('req : ', req);
  try {
    const user = await service.createUser(req.body);
    console.log('user : ', user);
    res.status(201).json({ success: true, user });
  } catch (err) {
    console.log('errr : ', err);
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await service.getUsers();
    console.log('users : ', users);
    res.json({ success: true, users });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await service.getUser(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await service.updateUser(req.params.id, req.body);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await service.deleteUser(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    res.json({ success: true, message: "User deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
