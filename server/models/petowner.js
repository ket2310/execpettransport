const { Schema, model } = require("mongoose");
const petownerSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phonenumber: {
      type: String,
      unique: true,
      trim: true,
    },
    cellnumber: {
      type: String,
      unique: true,
      trim: true,
    },
    instructions: {
      type: String,
      trim: true,
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
