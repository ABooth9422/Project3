const router = require("express").Router();
const routineAPI = require("./routineAPI");

router.use("/routine", routineAPI);

module.exports = router;