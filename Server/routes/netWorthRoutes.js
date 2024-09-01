const express = require("express");
const { handleNetWorth } = require("../controllers/netWorthController");
const router = express.Router();

router.post("/networth", handleNetWorth);

module.exports = router;
