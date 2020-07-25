const axios = require("axios");

module.exports = async function(req, res) {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const { url } = req.query;

  try {
    const { data } = await axios.get(url);
    return res.send(data);
  } catch (err) {
    res.status(500);
    return res.send({ error: err.response });
  }
};
