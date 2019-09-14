const router = require("express").Router();
const forumController = require("../../controllers/forumController");

router.route("/post")
  .post(forumController.postTopic);

router.route("/find")
  .get(forumController.getTopic);

module.exports = router;
