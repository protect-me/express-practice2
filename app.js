const express = require("express");
const nunjucks = require("nunjucks");

const admin = require("./routes/admin.js");

const app = express();
const port = 3000;

nunjucks.configure("template", {
  autoescape: true,
  express: app,
});
// 폴더명 : template
// 보안유지 : autoescape
// express : app 할당

app.get("/", (req, res) => {
  res.send("hello express!");
});

app.use("/admin", admin);

app.listen(port, () => {
  console.log("express listening on port : ", port);
});
