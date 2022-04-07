const router = require("express").Router();
const { User, Comment, Podcast } = require("../../models");

// GET /api/users. See all users
router.get("/", (req, res) => {
  // Access our USER model and run .findAll() method
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((UserInfo) => res.json(UserInfo))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Comment,
        attributes: ["id", "title", "comment_text", "created_at"],
        include: {
          model: Podcast,
          attributes: ["id", "title"],
        },
      },
    ],
  })
    .then((UserInfo) => {
      if (!UserInfo) {
        res.status(404).json({ message: "No user found with that id." });
        return;
      }
      res.json(UserInfo);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST Create a user
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((UserInfo) => {
      req.session.save(() => {
        // session variables
        req.session.user_id = UserInfo.id;
        req.session.username = UserInfo.username;
        req.session.loggedIn = true;

        res.json(UserInfo);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Authentication route
router.post("/login", (req, res) => {
  // Query User table using findone for the emailed entered
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((UserInfo) => {
    if (!UserInfo) {
      res.status(400).json({ messages: "No user with that email address" });
      return;
    }
    // res.json({ user: UserData });

    // Verify user
    const validPw = UserInfo.validatePw(req.body.password);
    if (!validPw) {
      res
        .status(400)
        .json({ message: "Entered password is incorrect, please retry" });
      return;
    }
    req.session.save(() => {
      // session variables
      req.session.user_id = UserInfo.id;
      req.session.username = UserInfo.username;
      req.session.loggedIn = true;

      res.json({ user: UserInfo, message: "Login successful" });
    });
  });
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// PUT /api/users/1. Update User
router.put("/:id", (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((UserInfo) => {
      if (!UserInfo[0]) {
        res.status(404).json({ message: "No user found, try another id" });
        return;
      }
      res.json(UserInfo);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/users/1. Delete user
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((UserInfo) => {
      if (!UserInfo) {
        res.status(404).json({ message: "No user found, try another id" });
        return;
      }
      res.json(UserInfo);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
