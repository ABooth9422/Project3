const router = require("express").Router();
const forumApi = require("./forumAPI");

router.use("/forums", forumApi);

module.exports = router;
