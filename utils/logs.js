import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@greedy-by-design-cluste.kcmobco.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

export async function getLogs(filter = {}) {
   try {
      await client.connect()

      const database = client.db('journal')
      const logs = database.collection('logs')
      const logIterator = logs.find(filter)

      return await logIterator.toArray()
   } finally {
      await client.close()
   }
}

export async function getLog(filter = {}) {
   try {
      await client.connect()

      const database = client.db('journal')
      const logs = database.collection('logs')

      return await logs.findOne(filter)
   } finally {
      await client.close()
   }
}

export async function getLogsUris() {
   return (await getLogs()).map((log) => {
      return { params: { log: log._id } }
   })
}

export async function insertLog(log) {
   try {
      await client.connect()

      const database = client.db('journal')
      const logs = database.collection('logs')

      return parseInsertResponse(await logs.insertOne(log))
   } finally {
      await client.close()
   }
}

function parseInsertResponse(insertResult) {
   return insertResult.acknowledged ? insertResult.insertedId : null
}

export async function updateLog(id, log) {
   try {
      await client.connect()

      const database = client.db('journal')
      const logs = database.collection('logs')

      // Ignore _id of log if passed
      if (Object.hasOwn(log, '_id')) {
         delete log._id
      }

      const query = { _id: id }
      const update = { $set: log }
      const options = {}
      const updateResult = await logs.updateOne(query, update, options)

      return updateResult.acknowledged && updateResult.modifiedCount === 1
         ? null
         : { error: `Failed to update log ${id} with ${JSON.stringify(log)}` }
   } finally {
      await client.close()
   }
}

export async function changeLogId(currentId, newId) {
   try {
      await client.connect()

      const database = client.db('journal')
      const logs = database.collection('logs')

      const log = await logs.findOne({ _id: currentId })
      if (log === null) {
         return { error: `Missing log with id ${currentId}` }
      }
      log._id = newId

      const insertedId = parseInsertResponse(await logs.insertOne(log))
      if (!insertedId) {
         return { error: `Failed to insert the log ${log}` }
      }

      const deleteResult = await logs.deleteOne({ _id: currentId })
      return deleteResult.acknowledged && deleteResult.deletedCount === 1
         ? null
         : { error: `Failed to delete log ${currentId}` }
   } finally {
      await client.close()
   }
}
