function getValidationQuery(validation, field) {
    return (
        (validation === 'valid') ?
            {
                [field]: { $exists: true, $ne: [] }
            } :
            (
                (validation === 'notValid') ?
                    {
                        [field]: { $exists: false }
                    } :
                    {}
            )
    );
}

module.exports = getValidationQuery;