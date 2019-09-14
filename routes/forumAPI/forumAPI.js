const router = require("express").Router();
const forumController = require("../../controllers/forumController");

router.route("/post")
  .post(forumController.postTopic);

router.route("/find")
  .get(forumController.getTopic);

router.route("/addComment")
  .post(forumController.addComment)

module.exports = router;
