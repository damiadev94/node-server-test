/*
    location -> temp, wetness, max/min, pressure, visibility, wind, dew point, UV level, moon phase 
*/

const location = {
  name: {
    city: String,
    country: String,
  },
  temp : {
    tempValue: Number,
    tempDescription: String,
    maxMin: {
      max: Number,
      min: Number,
    },
  },
  wetness: Number,
  pressure: Number,
  visibility: String,
  wind: Number,
  dewPoint: Number,
  UVLevel: Number,
  moonPhase: String,
  iconImg: String,
};

module.exports = {
  location,
};
