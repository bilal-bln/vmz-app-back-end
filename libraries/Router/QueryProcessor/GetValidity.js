function getValidity(query) {
    return (
        (query === 'all') ? 'all' :
            ((query === 'notValid') ? 'notValid' : 'valid')
    );
}

module.exports = getValidity;