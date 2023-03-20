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
   return insertResult.acknowledged ?
      insertResult.insertedId :
      null
}

