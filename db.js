const {MongoClient} = require('mongodb')
const url = 'mongodb://root:password@localhost:27017'

const createCollection = async () => {
    const connection = await MongoClient.connect(url)
    const collection = connection.db('remindersApp').collection('reminders')
    return collection
}

module.exports = createCollection