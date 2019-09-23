const router = require("express").Router();
const routineController = require("../../controllers/routineController");



router.route("/")
.get(routineController.getWorkout)

module.exports=router