const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema(
  {
    realEstate: { type: Number, default: 0, min: 0 },
    checkingAccounts: { type: Number, default: 0, min: 0 },
    savingsAccounts: { type: Number, default: 0, min: 0 },
    retirementAccounts: { type: Number, default: 0, min: 0 },
    autos: { type: Number, default: 0, min: 0 },
    otherAssets: { type: Number, default: 0, min: 0 },
  },
  { _id: false }
);

const liabilitySchema = new mongoose.Schema(
  {
    mortgages: { type: Number, default: 0, min: 0 },
    consumerDebt: { type: Number, default: 0, min: 0 },
    personalLoans: { type: Number, default: 0, min: 0 },
    studentLoans: { type: Number, default: 0, min: 0 },
    autoLoans: { type: Number, default: 0, min: 0 },
    otherDebt: { type: Number, default: 0, min: 0 },
  },
  { _id: false }
);

const netWorthSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assets: assetSchema,
    liabilities: liabilitySchema,
    netWorth: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("NetWorth", netWorthSchema);
