function getDateFilterQuery(startDate, endDate) {
    if (startDate && endDate) {
        return {
            'validities': {
                $elemMatch: {
                    'visible': false,
                    $and: [
                        { 'timeFrom': { $lte: `${endDate}` } },
                        { 'timeTo': { $gte: `${startDate}` } }
                    ]
                }
            }
        }
    }
    else if (startDate) {
        return {
            'validities': {
                $elemMatch: {
                    'visible': false,
                    'timeTo': { $gte: `${startDate}` }
                }
            }
        }
    }
    else if (endDate) {
        return {
            'validities': {
                $elemMatch: {
                    'visible': false,
                    'timeFrom': { $lte: `${endDate}` }
                }
            }
        }
    }
    else {
        return {
            'validities': {
                $elemMatch: {
                    'visible': false
                }
            }
        }
    }
}

module.exports = getDateFilterQuery;