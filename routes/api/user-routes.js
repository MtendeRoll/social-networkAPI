const router = require("express").Router();

const { getAllUser } = require("../../contollers/user-controller");

router.route("/").get(getAllUser);
module.exports = router;
