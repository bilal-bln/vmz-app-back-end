function getMatchingQuery(value, field) {
    return (
        (value === 'null') ?
            {
                $or: [
                    { [field]: { $exists: false } },
                    { [field]: { $eq: [] } },
                    { [field]: { $eq: '' } }
                ]
            } :
            (
                value ? { [field]: { $eq: `${value}` } } : {}
            )
    ); // template string to prevent MongoDB injections
}

module.exports = getMatchingQuery;