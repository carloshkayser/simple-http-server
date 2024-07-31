var express = require("express");
var cors = require("cors");

var os = require("os");
var hostname = os.hostname();

var app = express();

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send({
    message: "Hello World!",
    hostname: hostname,
  });
});

app.listen(3333);
