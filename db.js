const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017/?authSource=admin&readPreference=primary&ssl=false'

const createCollection = async () => {
        const connection = await MongoClient.connect(url)
        const collection = connection.db('remindersApp').collection('reminders')
    return collection
}

module.exports = createCollection