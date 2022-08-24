const { Schema } = require("mongoose");

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: new Schema.Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      required: "Text is Required",
      maxlength: 280,
    },

    username: {
      type: String,
      required: "Your username is Require",
    },

    createdAt: {
      type: Date,
      default: Date.today(),
      get: Date.toString("HH:mm"),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = ReactionSchema;
