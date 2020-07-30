const VmzDbController = require('../VmzDb/Controller');

function getTrafficDisorderData(req, res) {
    if (req.params.id) {
        const id = `${req.params.id}`;
        const dataFormat = (req.query.dataFormat === 'raw') ? 'raw' : 'normalised';

        VmzDbController.getDataById(
            id, dataFormat, (result) => {
                res.json(result);
            }
        );
    }
    else {
        res.send('Error - an ID must be provided!');
    }
}

module.exports = getTrafficDisorderData;