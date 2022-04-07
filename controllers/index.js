const router = require("express").Router();
const homeroutes = require("./homepage-routes");

router.use("/", homeroutes);

module.exports = router;
