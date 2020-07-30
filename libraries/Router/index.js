const express = require('express');
const router = express.Router();

const getTrafficDisorderData = require('./GetTrafficDisorderData');
const getTrafficDisorders = require('./GetTrafficDisorders');
const groupByField = require('./GroupByField');

router.get('/traffic/disorders', (req, res) => {
    getTrafficDisorders(req, res);
});

router.get('/traffic/disorders/:id/details', (req, res) => {
    getTrafficDisorderData(req, res);
});

// http://localhost:4000/groupedByField?field=address.district
router.get('/traffic/disorders/aggregation/:field', (req, res) => {
    groupByField(req, res);
});

module.exports = router;