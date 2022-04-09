const req = require("express/lib/request");

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

router.get("/genres", (req, res) =>{
  res.render("genres");
})


module.exports = router;
