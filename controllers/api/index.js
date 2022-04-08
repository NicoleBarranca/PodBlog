const router = require("express").Router();

const userRoutes = require("./user-routes");
const podcastRoutes = require("./podcast-route");
const commentRoutes = require("./comment-routes");

router.use("/comments", commentRoutes);
router.use("/users", userRoutes);
router.use("/podcasts", podcastRoutes);

module.exports = router;
