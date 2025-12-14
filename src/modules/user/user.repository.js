const User = require("./user.model");

module.exports = {

  // create new user/moderator
  create(data) {
    return User.create(data);
  },

  // find any user by ID
  findById(id) {
    return User.findById(id);
  },

  // find all users
  findAll() {
    return User.find();
  },

  // find users by role
  findUserByRole(role) {
    return User.find({ role });
  },

  // update user by ID
  update(id, data) {
    return User.findByIdAndUpdate(id, data, { new: true });
  },

  // delete user by ID
  remove(id) {
    return User.findByIdAndDelete(id);
  },
};
