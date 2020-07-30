const mongodb = require('mongodb');

// Aufbau der Verbindung mit dem MongoDB Server und zur Verfügungstellung eines Clients

class MongoDbClient {
    static connect(url, connectionReady) {
        mongodb.connect(
            url,
            { useUnifiedTopology: true },
            (err, client) => {
                if (err) {
                    throw err;
                }
                else {
                    connectionReady(client);
                }
            }
        )
    }
}

module.exports = MongoDbClient;