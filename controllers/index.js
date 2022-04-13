const router = require("express").Router();
const homeroutes = require("./homepage-routes");
const apiRoutes = require("./api");
const profileRoutes = require("./profile-routes");

router.use("/", homeroutes);
router.use("/api", apiRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
