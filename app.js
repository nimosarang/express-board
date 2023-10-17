const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("home", {
    title: "안녕하세요",
    message: "만나서 반갑습니다!",
    body: "이것은 express로 만드는 게시판 프로젝트입니다.",
  });
});

app.listen(3000);
