const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("profile", { loggedIn: req.session.loggedIn });
});

module.exports = router;
