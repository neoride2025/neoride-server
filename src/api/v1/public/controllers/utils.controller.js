const serviceTypeService = require("../../../../modules/utils/service-type/serviceType.service");

exports.privacy = async (req, res) => {
  res.json({ content: "Privacy policy" });
};

exports.terms = async (req, res) => {
  res.json({ content: "Terms & conditions" });
};

exports.contactInfo = async (req, res) => {
  res.json({
    email: "support@example.com",
    phone: "+91XXXXXXXXXX",
    address: "Company address",
  });
};

exports.serviceTypes = async (req, res, next) => {
  try {
    const data = await serviceTypeService.list();
    console.log('data : ', data);
    res.json({ status: 200, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
