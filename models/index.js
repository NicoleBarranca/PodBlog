const User = require("./User");
const Podcast = require("./Podcast");
const Comment = require("./Comment");
const Genre = require("./Genre");
const PodVote = require("./PodVote");

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Podcast.hasMany(Comment, {
  foreignKey: "pod_id",
});

Genre.hasMany(Podcast, {
  foreignKey: 'genre_id',
});

Podcast.belongsTo(Genre, {
  foreignKey: "genre_id"
});

Comment.belongsTo(Podcast, {
  foreignKey: "pod_id",
});

PodVote.belongsTo(Podcast, {
  foreignKey: 'pod_id',
});

User.hasMany(PodVote, {
  foreignKey: 'user_id',
});

PodVote.belongsTo(User, {
  foreignKey:'user_id',
});

Podcast.hasMany(PodVote, {
  foreignKey: 'pod_id',
});


module.exports = { User, Comment, Podcast, Genre, PodVote };
