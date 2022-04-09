const router = require("express").Router();
const { Comment } = require("../../models");

// get all comments
router.get("/", (req, res) => {
  Comment.findAll()
    .then((comment) => res.json(comment))
    .catch((err) => console.log(err));
});

// create comment
router.post("/", (req, res) => {
  Comment.create({
    title: req.body.title,
    comment_text: req.body.comment_text,
    user_id: req.body.user_id,
    pod_id: req.body.pod_id,
  })
    .then((newComment) => res.json(newComment))
    .catch((err) => console.log(err));
});

// delete comment
router.delete("/:id", (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedComment) => {
      if (!deletedComment) {
        res.status(404).json({ message: "No comment found with this id" });
        return;
      }
      res.json({ message: "Comment deleted!" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
