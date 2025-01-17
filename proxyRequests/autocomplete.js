const { createProxyMiddleware } = require('http-proxy-middleware');

// Proxy setup
const autocompleteProxy = createProxyMiddleware({
    target: `https://maps.googleapis.com`,
    on: {
      proxyReq: (proxyReq, req, res) => {
        const { input } = req.params;
        const urlEncodedInput = encodeURIComponent(input);
        proxyReq.path = `/maps/api/place/autocomplete/json?key=${process.env.GOOGLE_API_KEY}&input=${urlEncodedInput}`
      }
  
    },
  
  
    changeOrigin: true,
    // You don't need to use pathRewrite in this 
  
  });

  module.exports = autocompleteProxy;