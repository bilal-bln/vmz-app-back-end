const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./libraries/Router');

app.use(cors()); // delete in finale release
app.use(router);

app.listen(4000);