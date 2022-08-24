const { User } = require("../models");

const userController = {
  // GET all users
  getAllUser(req, res) {
    User.find({})
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  // GET a single user by its _id and populated thought and friend data
  //
  // POST a new user:
  // example data
  // {"username": "lernantino",
  // "email": "lernantino@gmail.com"}
  //
  // PUT to update a user by its _id
  // DELETE to remove user by its _id
  // Remove a user's associated thoughts when deleted.
  //
  //   /api/users/:userId/friends/:friendId
  // POST to add a new friend to a user's friend list
  // DELETE to remove a friend from a user's friend list
};

module.exports = userController;
