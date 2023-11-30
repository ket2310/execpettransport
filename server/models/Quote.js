const { Schema, model } = require("mongoose");
const petowner = require("./PetOwner");

const quoteSchema = new Schema(
  {
    petowner: {
      type: Schema.Types.ObjectId,
      ref: "PetOwner",
    },
  },
  {
    cats: {
      type: Schema.Types.ObjectId,
      ref: "Cat",
    },
  },
  {
    dogs: {
      type: Schema.Types.ObjectId,
      ref: "Dog",
    },
  },
  {
    travel: {
      type: Schema.Types.ObjectId,
      ref: "Travel",
    },
  },
  {
    timestamps: true,
  }
);

const Quote = model("Quote", quoteSchema);

module.exports = Quote;
