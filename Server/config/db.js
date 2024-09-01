const mongoose = require("mongoose");

async function connectDB(authUser) {
  return mongoose.connect(authUser);
}

module.exports = { connectDB };
