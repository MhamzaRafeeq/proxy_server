const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();
const cors = require('cors');
const autocompleteProxy = require('./proxyRequests/autocomplete');

const app = express();
app.use(cors());



app.use('/autocomplete/:input', autocompleteProxy);

app.listen(8080, () => {
  console.log('Server is running');
});
