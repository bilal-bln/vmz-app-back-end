const RouterQueryProcessor = require('./QueryProcessor');
const VmzDbController = require('../VmzDb/Controller');

function getTrafficDisorders(req, res) {
    const dataFormat = (
        (req.query.dataFormat === 'raw') ? 'raw' :
            ((req.query.dataFormat === 'normalised') ? 'normalised' : 'minimized')
    );
    const query = RouterQueryProcessor.processQuery(req.query);

    VmzDbController.getCollection(
        query, dataFormat, (result) => {
            res.json(result);
        }
    );
}

module.exports = getTrafficDisorders;