const { Schema, model } = require("mongoose");
const catSchema = require("./Cat");
const dogSchema = require("./Dog");

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
    Cat: {
      type: Schema.Types.ObjectId,
      ref: "Cat",
    },
    Dog: {
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
