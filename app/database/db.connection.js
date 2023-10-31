const mongoose = require("mongoose");
const { connect } = mongoose;

const connectToDB = (mongoUrl) => {
  try {
    const connection = connect(mongoUrl);
    console.log("connected to mongo!");
    return connection;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connectToDB };
