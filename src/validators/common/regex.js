exports.emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
exports.mobileRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
exports.nameRegex = /^[a-zA-Z][a-zA-Z\s.]{3,20}$/;
exports.passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^_+\-=])[A-Za-z\d@$!%*?&#^_+\-=]{6,18}$/
exports.contactMessageRegex = /^[a-zA-Z0-9\s.,'"?&]+$/;
exports.commonNameRegex = /^[a-zA-Z &_\-.]{3,25}$/;
exports.commonKeyRegex = /^[a-zA-Z_]{3,30}$/;
