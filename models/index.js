const User = require("./User");
const Podcast = require("./Podcast");
const Comment = require("./Comment");

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Podcast.hasMany(Comment, {
  foreignKey: "pod_id",
});

Comment.belongsTo(Podcast, {
  foreignKey: "pod_id",
});
