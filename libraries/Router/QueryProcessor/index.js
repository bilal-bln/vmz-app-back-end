const getValidity = require('./GetValidity');
const parseQuery = require('./ParseQuery');

class RouterQueryProcessor {
    static processQuery(query) {
        const startDate = parseQuery(query.startDate);
        const endDate = parseQuery(query.endDate);

        const district = parseQuery(query.district);
        const state = parseQuery(query.state);
        const type = parseQuery(query.type);

        const dates = getValidity(query.dates);
        const description = getValidity(query.description);
        const location = getValidity(query.location);
        const section = getValidity(query.section);
        const streets = getValidity(query.streets);
        const summary = getValidity(query.summary);
        const validities = getValidity(query.validities);

        return {
            startDate: startDate,
            endDate: endDate,
            district: district,
            state: state,
            type: type,
            dates: dates,
            description: description,
            location: location,
            section: section,
            streets: streets,
            summary: summary,
            validities: validities
        }
    }
}

module.exports = RouterQueryProcessor;