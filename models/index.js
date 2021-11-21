// import models
const Post = require("./Post");
const Comment = require("./Comment");

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

// Categories have many Products
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = {
  Post,
  Comment,
};
