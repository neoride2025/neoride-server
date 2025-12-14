// server util config
COOKIE_OPTIONS = {
  httpOnly: true,
  secure: false, // 🔴 MUST be false on http://localhost
  sameSite: "Lax", // 🔴 allows cross-origin POST
  path: "/",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};
MAX_SESSION_DAYS = 30; // 30 days from the login time

module.exports = { COOKIE_OPTIONS, MAX_SESSION_DAYS };