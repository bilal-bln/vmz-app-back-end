function parseQuery(query) {
    return query ? `${query}` : null; // template string to prevent MongoDB injections
}

module.exports = parseQuery;