const router = require("express").Router();
const placesApi = require("./placesApi");

router.use("/places", placesApi);

module.exports = router;
