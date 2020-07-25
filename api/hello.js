const axios = require("axios");

module.exports = async function(req, res) {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  res.send("<h2> Hello there </h2>");
};
