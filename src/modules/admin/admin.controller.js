const User = require('../users/user.model');
const Roles = require('../../constants/roles');

exports.updatePermissions = async (req, res, next) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id, role: Roles.MODERATOR },
      {
        permissions: req.body.permissions,
        isActive: true
      },
      { new: true }
    );

    if (!user) {
      throw { statusCode: 404, message: 'Moderator not found' };
    }

    res.status(200).json({
      success: true,
      message: 'Moderator activated & permissions updated'
    });
  } catch (err) {
    next(err);
  }
};
