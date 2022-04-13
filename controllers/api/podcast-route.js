const router = require("express").Router();
const sequelize = require('../../config/connection');
const { Podcast, Comment, User, Genre, PodVote } = require("../../models/");

// get all podcasts
router.get("/", (req, res) => {
  Podcast.findAll({
    attributes: ["id", "title", "creator", "description", "genre_id", [sequelize.literal('(SELECT COUNT(*) FROM podvote WHERE pod.id = podvote.post_id)'), 'podvote_count']],
    include: [
      {
        model: Genre,
        attributes: ["id", "genre_name"],
      },
      {
        model: Comment,
        attributes: { exclude: ["updatedAt"] },
        include: [
          {
            model: User,
            attributes: ["username"],
          },
        ],
      },
    ],
  })
    .then((podcast) => res.json(podcast))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get single podcast
router.get("/:id", (req, res) => {
  Podcast.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Genre,
      },
      {
        model: PodVote,
        attributes: ['id', [sequelize.fn('count', sequelize.col('id')), 'count']],
      },
      {
        model: Comment,
        attributes: { exclude: ["updatedAt"] },
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((podcast) => {
      if (!podcast) {
        res.status(404).json({ message: "No podcast found with that id" });
        return;
      }
      res.json(podcast);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// add a new podcast
router.post("/", (req, res) => {
  Podcast.create(req.body)
    .then((newPod) => res.json(newPod))
    .catch((err) => {
      console.log(err);
    });
});

// vote on a podcast
router.put("/podcas", (req, res) => {


})

// update podcast
router.put("/:id", (req, res) => {
  Podcast.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedPod) => {
      if (!updatedPod[0]) {
        res.status(404).json({ message: "No podcast found with that id" });
        return;
      }
      res.json({
        affectedCount: updatedPod,
        message: "Podcast updated!",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete podcast
router.delete("/:id", (req, res) => {
  Podcast.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedPod) => {
      if (!deletedPod) {
        res.status(404).json({ message: "No podcast found with this id" });
        return;
      }
      res.json({ message: "Podcast deleted!" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
