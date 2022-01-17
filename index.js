const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Node");
});

app.listen(8080, () => {
  console.log("listing on port: 8080");
});
