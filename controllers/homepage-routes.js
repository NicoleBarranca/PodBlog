const req = require("express/lib/request");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/profile", (req, res) => {
  res.render("profile");
});

router.get("/genres", (req, res) =>{
  res.render("genres");
})

module.exports = router;
