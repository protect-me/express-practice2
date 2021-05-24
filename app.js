const express = require("express");
const nunjucks = require("nunjucks");
const logger = require("morgan");

const admin = require("./routes/admin.js");

const app = express();
const port = 3000;

nunjucks.configure("template", {
  autoescape: true,
  express: app,
});

// 미들웨어 셋팅
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send("hello express!");
});

function vipMiddleware(req, res, next) {
  console.log("middleware vip");
  next();
}

app.use("/admin", vipMiddleware, admin);

app.listen(port, () => {
  console.log("express listening on port : ", port);
});
