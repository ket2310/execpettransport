const { Schema, model } = require("mongoose");

const catSchema = new Schema(
  {
    breed: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Cat = model("Cat", catSchema);

module.exports = Cat;
