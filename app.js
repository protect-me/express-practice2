const express = require("express");
const nunjucks = require("nunjucks");
const logger = require("morgan");
const bodyParser = require("body-parser");

const admin = require("./routes/admin.js");

const app = express();
const port = 3000;

nunjucks.configure("template", {
  autoescape: true,
  express: app,
});

// 미들웨어 셋팅
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 업로드 path 추가
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("hello express!");
});

app.use("/admin", admin);

app.listen(port, () => {
  console.log("express listening on port : ", port);
});
