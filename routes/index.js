const path = require("path");
const router = require("express").Router();
const userAPI = require("./userAPI");
const placesAPI = require("./placesAPI");
const forumAPI = require("./forumAPI")

// API Routes
router.use("/userAPI", userAPI);
router.use("/placesAPI", placesAPI)
router.use("/forumAPI",forumAPI)

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
