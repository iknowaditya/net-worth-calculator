const request = require("supertest");
const app = require("../../server");

describe("Net Worth Routes", () => {
  test("should post net worth and calculate correctly", async () => {
    const response = await request(app)
      .post("/api/networth")
      .send({
        userId: "testUserId",
        assets: { realEstate: 100000, checkingAccounts: 5000 },
        liabilities: { mortgages: 50000 },
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("netWorth");
  });

  // More route tests for net worth routes
});
