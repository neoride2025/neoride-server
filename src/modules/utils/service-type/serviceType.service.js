const ServiceType = require('./serviceType.model');

exports.list = () => {
  return ServiceType.find({ isActive: true });
};

exports.create = (data) => {
  return ServiceType.create(data);
};

exports.updateStatus = (id, isActive) => {
  return ServiceType.findByIdAndUpdate(id, { isActive }, { new: true });
};
