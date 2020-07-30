const getFilterQuery = require('./GetFilterQuery');

class VmzDbQueryProcessor {
    static getGroupQuery(fieldToGroupBy) {
        return {
            $group: {
                _id: `$${fieldToGroupBy}`,
                count: { $sum: 1 }
            }
        }
    }

    static getSortQuery(fieldToSortBy) {
        return { $sort: { [`${fieldToSortBy}`]: 1 } }
    }

    static getFilterQuery(query) {
        return getFilterQuery(
            query.startDate, query.endDate,
            query.district, query.state, query.type,
            query.dates,
            query.description, query.location,
            query.section, query.streets,
            query.summary, query.validities
        );
    }
}

module.exports = VmzDbQueryProcessor;