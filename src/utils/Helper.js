const AppError = require("../utils/AppError");

const MSG = require("../constants/response-messages");

module.exports = {
  // function to create key from the name/label of the entry
  toCapsWithUnderscore: (str) => {
    return str
      .trim()
      .replace(/[^a-zA-Z0-9]+/g, "_") // 👈 space + symbols → _
      .replace(/^_+|_+$/g, "") // 👈 trim _
      .toUpperCase();
  },
  generatePermissionKey(label) {
    if (!label || typeof label !== "string") throw new AppError(400, MSG.PERMISSION.NO_EMPTY);

    const ACTION_MAP = {
      view: "VIEW",
      create: "CREATE",
      add: "CREATE",
      update: "UPDATE",
      edit: "UPDATE",
      delete: "DELETE",
      remove: "DELETE",
      export: "EXPORT",
    };

    const words = label
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "") // remove special chars
      .trim()
      .split(/\s+/);

    if (words.length < 2) throw new AppError(400, MSG.PERMISSION.NAME_INVALID);
    // ✅ action = LAST word
    const actionWord = words[words.length - 1];
    const action = ACTION_MAP[actionWord];

    if (!action) throw new AppError(400, MSG.PERMISSION.NAME_INVALID);

    // ✅ resource = ALL words before action
    const resource = words.slice(0, -1).join("_").toUpperCase();

    return `${action}_${resource}`;
  },
};
