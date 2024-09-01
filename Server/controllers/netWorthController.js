const NetWorth = require("../models/netWorthModel");

const handleNetWorth = async (req, res) => {
  try {
    const { userId, assets, liabilities } = req.body;

    const totalAssets = Object.values(assets).reduce(
      (total, value) => total + value,
      0
    );
    const totalLiabilities = Object.values(liabilities).reduce(
      (total, value) => total + value,
      0
    );
    const netWorth = totalAssets - totalLiabilities;

    const newNetWorth = new NetWorth({
      userId,
      assets,
      liabilities,
      netWorth,
    });

    await newNetWorth.save();
    res.status(201).json({ message: "Net worth saved successfully", netWorth });
  } catch (error) {
    res.status(500).json({ message: "Error saving net worth", error });
  }
};

module.exports = { handleNetWorth };
