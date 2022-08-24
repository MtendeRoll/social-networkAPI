const { Schema, model } = require("mongoose");
const Date = require("datejs");

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "Text is Required",
      minlength: 1,
      maxlength: 280,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },

    username: {
      type: String,
      required: "Your username is Require",
    },

    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "reactionSchema",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
