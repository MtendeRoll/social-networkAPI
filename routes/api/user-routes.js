const router = require("express").Router();

const { getAllUsers, getUserById, createUser } = require("../../contollers/user-controller");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:userId").get(getUserById);

router.route("/:userId/friends/:friendId");

module.exports = router;
