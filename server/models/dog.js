const { Schema, model } = require("mongoose");

const dogSchema = new Schema(
  {
    breed: {
      type: String,
      required: true,
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

const Dog = model("Dog", dogSchema);

module.exports = Dog;
