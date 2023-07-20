const express = require("express");
const responseTime = require("response-time");
const app = express();

app.use(express.json());

// Write the 3rd party RESPONSE-TIME middleware to get the desired result

// GET endpointfor sending the result
app.get("/", function (req, res) {
  res.send("Checing response time");
});

module.exports = app;
