const express = require('express');
require('dotenv').config();
const cors = require('cors');
const autocompleteProxy = require('./proxyRequests/autocomplete');
const geocodingProxy = require('./proxyRequests/geocoding');

const app = express();
app.use(cors());



app.use('/autocomplete/:input', autocompleteProxy);
app.use('/geocode', geocodingProxy);

app.listen(8080, () => {
  console.log('Server is running');
});
