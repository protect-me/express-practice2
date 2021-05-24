const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("admin page!");
});

router.get("/products", (req, res) => {
  // res.send("admin / products page!");
  res.render("admin/products.html", {
    message: "hello:)",
  });
});

module.exports = router;
