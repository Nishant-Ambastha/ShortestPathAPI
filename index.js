const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all routes

// Endpoint to fetch city data
app.get('/cities', async (req, res) => {
  try {
    const cityData = await axios.get('https://gist.githubusercontent.com/dastagirkhan/00a6f6e32425e0944241/raw/33ca4e2b19695b2b93f490848314268ed5519894/gistfile1.json');
    res.json(cityData.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch city data' });
  }
});

// Endpoint to find shortest path (will implement later)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
