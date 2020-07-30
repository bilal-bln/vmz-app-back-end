const getDateFilterQuery = require('./GetDateFilterQuery');
const getMatchingQuery = require('./GetMatchingQuery');
const getValidationQuery = require('./GetValidationQuery');

function getFilterQuery(
    startDate, endDate,
    district, state, type,
    dates,
    description, location,
    section, streets,
    summary, validities
) {
    const dateRangeQuery = getDateFilterQuery(startDate, endDate);

    const districtQuery = getMatchingQuery(district, 'address.district');
    const stateQuery = getMatchingQuery(state, 'address.state');
    const typeQuery = getMatchingQuery(type, 'consequence.summary');

    const timeFromQuery = getValidationQuery(dates, 'validities.timeFrom');
    const timeToQuery = getValidationQuery(dates, 'validities.timeTo');
    const descriptionQuery = getValidationQuery(description, 'description');
    const locationQuery = getValidationQuery(location, 'location.coordinates');
    const sectionQuery = getValidationQuery(section, 'section');
    const streetsQuery = getValidationQuery(streets, 'streets');
    const summaryQuery = getValidationQuery(summary, 'consequence.summary');
    const validitiesQuery = getValidationQuery(validities, 'validities');

    const query = [
        dateRangeQuery,
        districtQuery, stateQuery, typeQuery,
        timeFromQuery, timeToQuery, descriptionQuery, locationQuery,
        sectionQuery, streetsQuery, summaryQuery, validitiesQuery
    ];

    // console.log(query);

    return {
        '$and': query
    }
}

module.exports = getFilterQuery;