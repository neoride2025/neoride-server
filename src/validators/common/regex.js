email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
mobile = /^(?:\+91|91)?[6-9]\d{9}$/;
name = /^[a-zA-Z][a-zA-Z\s.]{3,20}$/;
password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^_+\-=])[A-Za-z\d@$!%*?&#^_+\-=]{6,18}$/;
contactMessage = /^[a-zA-Z0-9\s.,'"?&]+$/;
commonName = /^[a-zA-Z &_\-.]{3,25}$/;
commonKey = /^[A-Z_]{3,30}$/;

module.exports = {
  email,
  mobile,
  name,
  password,
  contactMessage,
  commonName,
  commonKey,
};
