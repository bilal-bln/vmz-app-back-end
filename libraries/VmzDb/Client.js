const MongoDbClient = require('../MongoDbClient');

const url = 'mongodb://vmz:cOEy0kXWWZT8@www.robert-magnus.de:27017/vmz';

// Aufbereitung der Datensätze und Collections aus der Vmz Datenbank in binärer Form

class VmzDbClient {
    static connect(databaseReady) {
        MongoDbClient.connect(url, (client) => {
            VmzDbClient.Db = client.db('vmz'); // get vmz database
            VmzDbClient.Collection = VmzDbClient.Db.collection('vmz'); // get binary json data (not formatted)
            databaseReady(client);
        })
    }
}

VmzDbClient.Db = null;
VmzDbClient.Collection = null;

module.exports = VmzDbClient