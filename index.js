const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());

// Proxy setup
const apiProxy = createProxyMiddleware({
  target: `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${process.env.GOOGLE_API_KEY}&input=fais`,
  
  changeOrigin: true,
  // You don't need to use pathRewrite in this case
});

app.use('/api', apiProxy);

app.listen(8080, () => {
  console.log('Server is running');
});
