const { Schema, model } = require("mongoose");

const travelSchema = new Schema(
  {
    quote: {
      type: Schema.Types.ObjectId,
      ref: "Quote",
    },
    traveltype: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    traveldate: {
      type: Date,
      required: true,
    },
    returndate: {
      type: Date,
    },
    pickupaddress: {
      type: String,
      required: true,
      trim: true,
    },
    pickupaddress2: {
      type: String,
      required: true,
      trim: true,
    },
    pickupcity: {
      type: String,
      required: true,
      trim: true,
    },
    pickupstate: {
      type: String,
      required: true,
      trim: true,
    },
    pickupzip: {
      type: String,
      required: true,
      trim: true,
    },

    destinationaddress: {
      type: String,
      required: true,
      trim: true,
    },
    destinationaddress2: {
      type: String,
      required: true,
      trim: true,
    },
    destinationcity: {
      type: String,
      required: true,
      trim: true,
    },
    destinationstate: {
      type: String,
      required: true,
      trim: true,
    },
    destinationzip: {
      type: String,
      required: true,
      trim: true,
    },
    otherinfo: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Travel = model("Travel", travelSchema);

module.exports = Travel;
