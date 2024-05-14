const { Schema, model } = require("mongoose");

const travelSchema = new Schema(
  {
    traveltype: {
      type: String,
      required: true,
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
    },
    pickupaddress2: {
      type: String,
      required: true,
    },
    pickupcity: {
      type: String,
      required: true,
    },
    pickupstate: {
      type: String,
      required: true,
    },
    pickupzip: {
      type: String,
      required: true,
    },

    destinationaddress: {
      type: String,
      required: true,
    },
    destinationaddress2: {
      type: String,
      required: true,
    },
    destinationcity: {
      type: String,
      required: true,
    },
    destinationstate: {
      type: String,
      required: true,
    },
    destinationzip: {
      type: String,
      required: true,
    },
    otherinfo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Travel = model("Travel", travelSchema);

module.exports = Travel;
