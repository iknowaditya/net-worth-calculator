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
  expect(response.body.netWorth).toBe(100000 + 5000 - 50000); // Ensure this matches the calculated value

  // Verify that data was actually saved in the database
  const savedNetWorth = await NetWorth.findOne({ userId: "testUserId" });
  expect(savedNetWorth).toBeDefined();
  expect(savedNetWorth.assets.realEstate).toBe(100000);
  expect(savedNetWorth.liabilities.mortgages).toBe(50000);
  expect(savedNetWorth.netWorth).toBe(100000 + 5000 - 50000); // Verify net worth calculation
});
