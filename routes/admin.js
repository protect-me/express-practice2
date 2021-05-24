const express = require("express");
const router = express.Router();

function testMiddleware(req, res, next) {
  console.log("middleware 1111");
  next();
}
function testMiddleware2(req, res, next) {
  console.log("middleware 2222");
  next();
}

function loginRequired(req, res, next) {
  if (islogin) {
    next();
  } else {
    res.redirect("/login");
  }
}

router.get("/", testMiddleware, testMiddleware2, (req, res) => {
  res.send("admin page!");
});

router.get("/products", (req, res) => {
  // res.send("admin / products page!");
  res.render("admin/products.html", {
    message: "hello:)",
  });
});

module.exports = router;
