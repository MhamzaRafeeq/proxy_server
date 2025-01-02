const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const app = express()
app.use(cors())

const apiProxy = createProxyMiddleware({
    target: 'https://maps.googleapis.com/maps/api/place/autocomplete/json',
    changeOrigin: true,
  });
  app.use('/api', apiProxy);
  app.listen(8080, ()=>{
    console.log('server is running');
  })
  