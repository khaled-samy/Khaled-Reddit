const { logOut } = require('./logOut');
const { addPosts } = require('./addPosts');
const { getUserPosts } = require('./getUserPosts');
const { deletePost } = require('./deletePost');

module.exports = {
  logOut, addPosts, getUserPosts, deletePost,
};
