const { Schema, model } = require("mongoose");
const petownerSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
    },
    cellnumber: {
      type: String,
    },
    instructions: {
      type: String,
    },
    cat: {
      type: Schema.Types.ObjectId,
      ref: "Cat",
    },
    dog: {
      type: Schema.Types.ObjectId,
      ref: "Dog",
    },
  },
  {
    timestamps: true,
  }
);

const PetOwner = model("PetOwner", petownerSchema);

module.exports = PetOwner;
