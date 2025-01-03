const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());

// Proxy setup
const apiProxy = createProxyMiddleware({
  target: (req) => {
    // Extract input from the request parameters
    const { input } = req.params;
    // Dynamically construct the target URL with the input value
    return `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${process.env.GOOGLE_API_KEY}&input=${input}`;
  },
  changeOrigin: true,
  // You don't need to use pathRewrite in this case
});

app.use('/api/:input', apiProxy);

app.listen(8080, () => {
  console.log('Server is running');
});
