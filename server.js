const path = require("path");

const express = require("express");

const PORT = 3000;

const app = express();

app.get("/secret", (req, res) => {
  res.send("Your personal secret value is 42!");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
