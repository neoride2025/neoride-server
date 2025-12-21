// permission.cache.js
const cache = new Map();

const get = (roleKey) => cache.get(roleKey);
const set = (roleKey, permissions) => cache.set(roleKey, permissions);
const del = (roleKey) => cache.delete(roleKey);

module.exports = { get, set, del };
