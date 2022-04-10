const { Podcast, Comment, User, Genre } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
  console.log(req.session);
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/login", (req, res) => {
  res.render("login");
});

// podcast page
router.get("/podcasts/:id", (req, res) => {
  Podcast.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Genre,
      },
      {
        model: Comment,
        attributes: ["id", "title", "comment_text", "createdAt"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((podData) => {
      const podcast = podData.get({ plain: true });
      console.log(podcast);
      res.render("podcast", podData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

// ('/comedy' req, res => {
//podcast finall
//})
