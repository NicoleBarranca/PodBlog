const router = require("express").Router();
const homeroutes = require("./homepage-routes");
const apiRoutes = require("./api");

router.use("/", homeroutes);
router.use("/api", apiRoutes);

module.exports = router;
