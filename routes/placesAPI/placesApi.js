const router = require("express").Router();
const placesController = require("../../controllers/placesController");

router.route("/")
  .get(placesController.findGyms);

module.exports = router;
