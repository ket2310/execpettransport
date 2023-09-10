const { Schema, model } = require("mongoose");
const catSchema = require("./cat");
const dogSchema = require("./dog");

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
      ref: "cat",
    },
    dog: {
      type: Schema.Types.ObjectId,
      ref: "dog",
    },
  },
  {
    timestamps: true,
  }
);

const PetOwner = model("PetOwner", petownerSchema);

module.exports = PetOwner;
