const express = require("express");
const server = express();

let PORT = process.env.PORT || 4000;
server.get("/", (req, res) => {
  res.send("Welcome!");
});

server.listen(PORT, () => {
  console.log("server listening");
});
