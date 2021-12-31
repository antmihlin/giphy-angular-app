var express = require("express");
var path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.get("/server-settings", (req, res) => {
  const data = { server: process.env.SERVER };
  res.status(200).json(process.env.SERVER);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.disable("etag");

var port = process.env.PORT || 5000;
app.listen(port);
console.log("server started " + port);
