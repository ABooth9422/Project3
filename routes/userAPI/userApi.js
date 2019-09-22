const router = require("express").Router();
const userController = require("../../controllers/userController");


router.route("/")
  .get(userController.findAll)
  .post(userController.create);

router
  .route("/:id")
  .get(userController.findById)
  
router.route("/addGym")
  .post(userController.addGym)
router.route("/remFav/:gymId/:UserId")
  .delete(userController.remGym)

module.exports = router;
