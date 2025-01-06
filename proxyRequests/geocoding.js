const { createProxyMiddleware } = require('http-proxy-middleware');

// Proxy setup
const geocodingProxy = createProxyMiddleware({
    target: `https://maps.googleapis.com`,
    on: {
        proxyReq: (proxyReq, req, res) => {
            const { address } = req.query;
            const urlEncodedAddress = encodeURIComponent(address);
            proxyReq.path = `/maps/api/geocode/json?address=${urlEncodedAddress}&key=${process.env.GOOGLE_API_KEY}`
        }

    },


    changeOrigin: true,
    // You don't need to use pathRewrite in this 

});

module.exports = geocodingProxy;