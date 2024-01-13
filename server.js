const fs = require("fs");
const https = require("https");
const path = require("path");
const express = require("express");
const helmet = require("helmet");

const PORT = 3000;

const app = express();

app.use(helmet());

app.get("/secret", (req, res) => {
  res.send("Your personal secret value is 42!");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

https
  .createServer(
    {
      key: fs.readFileSync("localhost-key.pem"),
      cert: fs.readFileSync("localhost.pem"),
    },
    app
  )
  .listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
