const router = require("express").Router();
const routineRoutes = require("./routines");

// Book routes
router.use("/test/routines", routineRoutes);

module.exports = router;
