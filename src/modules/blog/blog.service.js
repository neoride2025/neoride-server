const repo = require('./blog.repository');

module.exports = {
  createBlog(data) {
    return repo.create(data);
  },

  listBlogs() {
    return repo.findAll();
  },

  getBlog(slug) {
    return repo.findBySlug(slug);
  },

  updateBlog(id, data) {
    return repo.update(id, data);
  },

  deleteBlog(id) {
    return repo.remove(id);
  }
};
