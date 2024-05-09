const { Schema, model } = require("mongoose");

const dogSchema = new Schema(
  {
    petowner: {
      type: Schema.Types.ObjectId,
      ref: "Petowner",
    },
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

const Dog = model("Dog", dogSchema);

module.exports = Dog;
