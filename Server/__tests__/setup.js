const mongoose = require("mongoose");
const { connectDB } = require("../config/db");

beforeAll(async () => {
  await connectDB(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});
