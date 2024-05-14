const { Schema, model } = require("mongoose");

const quoteSchema = new Schema(
  {
    petowner: {
      type: Schema.Types.ObjectId,
      ref: "PetOwner",
    },
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
