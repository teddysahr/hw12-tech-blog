// import models
const Post = require("./Post");
const Comment = require("./Comment");
const User = require("./User");

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Categories have many Products
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = {
  Post,
  Comment,
  User,
};
