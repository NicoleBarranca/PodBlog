const router = require("express").Router();
const { Podcast, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  Comment.findAll({
    where: {
      user_id: req.session.user_id,
    },
    include: [
      {
        model: Podcast,
        attributes: ["id", "title"],
      },
    ],
  }).then((commentData) => {
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    res.render("profile", { comments, loggedIn: req.session.loggedIn });
  });
});

module.exports = router;
