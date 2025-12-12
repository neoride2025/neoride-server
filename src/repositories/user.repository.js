const User = require("../models/user.model");

exports.create = (data) => User.create(data);

exports.findAll = () => User.find();

exports.findById = (id) => User.findById(id);

exports.updateById = (id, data) => User.findByIdAndUpdate(id, data, { new: true });

exports.deleteById = (id) => User.findByIdAndDelete(id);
