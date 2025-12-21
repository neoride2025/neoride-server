// server util config
COOKIE_OPTIONS = {
  httpOnly: true,
  secure: false, // 🔴 MUST be false on http://localhost
  sameSite: "Lax", // 🔴 allows cross-origin POST
  path: "/",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};
MAX_SESSION_DAYS = 30; // 30 days from the login time

// server content MIDIInput, max length controls
NAME_MIN_LENGTH = 3;
NAME_MAX_LENGTH = 20;
COMMON_NAME_MIN_LENGTH = 2;
COMMON_NAME_MAX_LENGTH = 25;
COMMON_KEY_MAX_LENGTH = 30;
PASSWORD_MIN_LENGTH = 6;
PASSWORD_MAX_LENGTH = 18;
DESCRIPTION_MAX_LENGTH = 200;

module.exports = {
  COOKIE_OPTIONS,
  MAX_SESSION_DAYS,
  NAME_MIN_LENGTH,
  NAME_MAX_LENGTH,
  COMMON_NAME_MIN_LENGTH,
  COMMON_NAME_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  DESCRIPTION_MAX_LENGTH,
};
