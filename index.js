require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("this is my login");
});

app.get("/signup", (req, res) => {
  res.send("this is my signup page");
});

app.get("/youtube", (req, res) => {
  res.send("<h1> This is you tube page </h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
