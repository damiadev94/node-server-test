const mongoose = require("mongoose");
const { Schema, } = mongoose;

const listSchema = new Schema({
  location: {
    name: String,
    date: {
      temp: {
        C: Number,
        F: Number,
      },
      maxMin: {
        max: Number,
        min: Number,
      },
      rainPrecipitation: Number,
      weatness: Number,
      wind: Number,
    },
  },
});

const listModel = mongoose.model("location", listSchema)

module.exports = listModel
