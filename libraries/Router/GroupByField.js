const RouterQueryProcessor = require('./QueryProcessor');
const VmzDbController = require('../VmzDb/Controller');

function groupByField(req, res) {
    if (req.params.field) {
        const field = `${req.params.field}`;
        const sortBy = (req.query.sortBy === 'count') ? 'count' : '_id';
        const query = RouterQueryProcessor.processQuery(req.query);

        VmzDbController.getCollectionGroupedByField(
            query, field, sortBy, (result) => {
                res.json(result);
            }
        );
    }
    else {
        res.send('Error - a field has to be specified!');
    }
}

module.exports = groupByField;