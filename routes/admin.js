const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("admin page!");
});

router.get("/products", (req, res) => {
  res.send("admin / products page!");
});

module.exports = router;
