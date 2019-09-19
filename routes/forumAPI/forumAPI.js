const router = require("express").Router();
const forumController = require("../../controllers/forumController");

router.route("/createForumTopic")
  .post(forumController.createForumTopic);
router.route("/getForumTopics")
  .get(forumController.getForumTopics);
router.route("/getForumTopic/:id")
  .get(forumController.getForumTopic)
router.route("/upDateTopic/:id")
  .put(forumController.updateTopic)
router.route("/createComment")
  .post(forumController.createComment);
router.route("/getComments")
  .get(forumController.getComments);
router.route("/getComment/:id")
  .get(forumController.getComment)

  router.route("/getLike/:id")
  .get(forumController.getLike)

module.exports = router;
