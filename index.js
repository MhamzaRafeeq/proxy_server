const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());

// Proxy setup
const apiProxy = createProxyMiddleware({
  target: (req)=> {
    const {input} = req.params;
    return `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${process.env.GOOGLE_API_KEY}&input=${input}`;

  },  
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remove the '/api' prefix before forwarding to the target
  }
});

app.use('/api/:input', apiProxy);

app.listen(8080, () => {
  console.log('Server is running');
});
