const express = require("express");
const router = express.Router();
const aiController = require("../controller/aiController");

router.post("/review", aiController.reviewCode);

module.exports = router;
