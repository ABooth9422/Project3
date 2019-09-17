const router = require("express").Router();
const placesController = require("../../controllers/placesController");

router.route("/noLocation/:query")
  .get(placesController.findGymsWithoutLocation);

// router.route("/location/:query")
//   .get(placesController.findGymsWithLocation);

router.route("/details/:query")
.get(placesController.findGymPhoto);

module.exports = router;
