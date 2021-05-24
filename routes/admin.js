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

router.get("/products/write", (req, res) => {
  res.render("admin/write.html");
});

router.post("/products/write", (req, res) => {
  // res.send(req.body.name);
  // res.send(req.body.price);
  // res.send(req.body.description);
  res.send(req.body);
});

module.exports = router;
