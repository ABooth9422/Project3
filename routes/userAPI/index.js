const router = require("express").Router();
const userApi = require("./userApi");

router.use("/users", userApi);

module.exports = router;
