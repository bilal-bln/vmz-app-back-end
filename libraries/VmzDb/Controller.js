const { ObjectId } = require('mongodb');

const VmzDbClient = require('./Client');
const VmzDbProjection = require('./Projection'); // change name to VmzDbGetCollectionProjection
const VmzDbQueryProcessor = require('./QueryProcessor');

class VmzDbController {
    static getCollectionByAggregation(aggregationQuery, dataReady) {
        VmzDbClient.connect((client) => {
            VmzDbClient.Collection.aggregate(aggregationQuery).toArray((error, result) => {
                if (error) {
                    throw error;
                } else {
                    client.close();

                    dataReady(result);
                }
            });
        });
    }

    /*static*/ genericGetCollection(query, fieldToGroupBy, fieldToSortBy, dataReady) {
        const match = { $match: query };
        const project = VmzDbProjection.normalise();
        const group = VmzDbQueryProcessor.getGroupQuery(fieldToGroupBy);
        const sort = VmzDbQueryProcessor.getSortQuery(fieldToSortBy);
        const aggregationQuery = [match, project, group, sort];

        this.getCollectionByAggregation(aggregationQuery, dataReady);
    }

    static getCollection(query, dataFormat, dataReady) {
        const match = { $match: VmzDbQueryProcessor.getFilterQuery(query) };
        const project = (dataFormat === 'normalised') ? VmzDbProjection.normalise() : VmzDbProjection.minimize();
        const aggregationQuery = (dataFormat === 'raw') ? [match] : [match, project]; // use a VmzDbQueryProcessor static function called getCollectionAggregationQuery instead

        this.getCollectionByAggregation(aggregationQuery, dataReady);
    }

    static getCollectionGroupedByField(query, fieldToGroupBy, fieldToSortBy, dataReady) {
        const match = { $match: VmzDbQueryProcessor.getFilterQuery(query) };
        const group = VmzDbQueryProcessor.getGroupQuery(fieldToGroupBy);
        const sort = VmzDbQueryProcessor.getSortQuery(fieldToSortBy);
        const aggregationQuery = [match, group, sort]; // use a VmzDbQueryProcessor static function called getCollectionGroupedByFieldAggregationQuery instead

        this.getCollectionByAggregation(aggregationQuery, dataReady);
    }

    static getDataById(id, dataFormat, dataReady) {
        const match = { $match: { '_id': ObjectId(`${id}`) } };
        const project = VmzDbProjection.normalise();
        const aggregationQuery = (dataFormat === 'raw') ? [match] : [match, project]; // use a VmzDbQueryProcessor static function called getDataByIdAggregationQuery instead

        this.getCollectionByAggregation(aggregationQuery, dataReady);
    }
}

module.exports = VmzDbController;