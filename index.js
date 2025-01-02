const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
app.use(cors());

// Proxy setup
const apiProxy = createProxyMiddleware({
  target: 'https://maps.googleapis.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remove the '/api' prefix before forwarding to the target
  }
});

app.use('/api', apiProxy);

app.listen(8080, () => {
  console.log('Server is running');
});
