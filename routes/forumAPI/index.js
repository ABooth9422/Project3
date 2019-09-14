const router = require("express").Router();
const forumApi = require("./forumApi");

router.use("/forum", forumApi);

module.exports = router;
