const repo = require("../repositories/user.repository");

exports.createUser = async (data) => {
    console.log('data : ', data);
  return await repo.create(data);
};

exports.getUsers = async () => {
  return await repo.findAll();
};

exports.getUser = async (id) => {
  return await repo.findById(id);
};

exports.updateUser = async (id, data) => {
  return await repo.updateById(id, data);
};

exports.deleteUser = async (id) => {
  return await repo.deleteById(id);
};
