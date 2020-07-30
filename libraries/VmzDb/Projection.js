class VmzDbProjection {
    static minimize() {
        return {
            $project: {
                _id: 1,
                consequence: {
                    summary: 1
                },
                location: {
                    coordinates: 1
                }
            }
        };
    }

    static normalise() {
        return {
            $project: {
                _id: 1,
                consequence: 1,
                address: 1,
                streets: 1,
                validities: { $arrayElemAt: ['$validities', 0] },
                description: 1,
                section: 1,
                location: 1,
                timestamp: 1
            }
        };
    }
}

module.exports = VmzDbProjection;