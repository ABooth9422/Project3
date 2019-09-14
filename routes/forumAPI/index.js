const router = require("express").Router();
const forumApi = require("./forumAPI");

router.use("/forum", forumApi);

module.exports = router;
