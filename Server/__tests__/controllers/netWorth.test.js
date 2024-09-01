const request = require("supertest");
const app = require("../../server");
const NetWorth = require("../../models/netWorthModel");
const mongoose = require("mongoose"); // Ensure mongoose is imported

describe("Net Worth Controller", () => {
  // Setup for database connection, if needed
  beforeAll(async () => {
    // Initialize database connection if necessary
    // For example, you might need to connect to a test database
  });

  afterAll(async () => {
    // Cleanup the database and close connections
    await NetWorth.deleteMany(); // Clear net worth collection
    // If using global server or other resources, close them
    // global.server.close();
    await mongoose.connection.close(); // Close mongoose connection
  });

  test("should calculate and save net worth", async () => {
    const response = await request(app)
      .post("/api/networth")
      .send({
        userId: "testUserId",
        assets: { realEstate: 100000, checkingAccounts: 5000 },
        liabilities: { mortgages: 50000 },
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("netWorth");

    // Verify that data was actually saved in the database
    const savedNetWorth = await NetWorth.findOne({ userId: "testUserId" });
    expect(savedNetWorth).toBeDefined();
    expect(savedNetWorth.assets.realEstate).toBe(100000);
    expect(savedNetWorth.liabilities.mortgages).toBe(50000);
  });

  // More tests for error cases
});
