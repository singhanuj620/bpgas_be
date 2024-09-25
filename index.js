// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post("/proxy", async (req, res) => {
  const { url } = req.body;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(error.response ? error.response.status : 500).json({
      error: error.message || "An error occurred",
    });
  }
});

app.listen(PORT, () => {
  console.log(`CORS Proxy Server is running on http://localhost:${PORT}`);
});
