const express = require("express");
const server = express();

server.listen(4000, () => {
  console.log("server listening");
});

server.get("/", (req, res) => {
  res.send("Welcome!");
});
