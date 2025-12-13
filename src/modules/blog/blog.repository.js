const Blog = require('./blog.model');

module.exports = {
  create(data) {
    return Blog.create(data);
  },

  findAll() {
    return Blog.find({ isPublished: true });
  },

  findBySlug(slug) {
    return Blog.findOne({ slug, isPublished: true });
  },

  update(id, data) {
    return Blog.findByIdAndUpdate(id, data, { new: true });
  },

  remove(id) {
    return Blog.findByIdAndDelete(id);
  }
};
