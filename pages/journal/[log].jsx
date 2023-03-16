import BottomNavigationLayout from 'components/BottomNavigationLayout'
import Image from 'next/image'
import logStyles from 'styles/Log.module.css'
import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@greedy-by-design-cluste.kcmobco.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

export default function Log({ log }) {
   const logDate = new Date(log.date)

   return (
      <div className={`${logStyles.Log}`}>
         <div className={`${logStyles.logTimeWrapper}`}>
            <time
               dateTime={log.date}
               className={`${logStyles.logTime}`}
            >
               {logDate.getDate()} {logDate.toLocaleString('default', { month: 'short' })}{' '}
               <span className={`${logStyles.logTimeSeparator}`}></span> 2023
            </time>
         </div>

         <header className={`${logStyles.logHeader} ${logStyles.collapsingBottomBorder}`}>
            <div className={`${logStyles.titleImageWrapper}`}>
               <Image
                  className={`${logStyles.titleImage}`}
                  src={log.titleImage}
                  alt={log.titleImageAlt}
                  fill
               />
            </div>
            <h1 className={`${logStyles.title}`}>{log.title}</h1>
            <h2 className={`${logStyles.subtitle}`}>{log.subtitle}</h2>
         </header>

         <main className={`${logStyles.article}`}>
            {log.paragraphs.map((paragraph, paragraphId) => {
               return (
                  <p
                     className={`${logStyles.paragraph}`}
                     key={paragraphId}
                  >
                     {paragraph}
                  </p>
               )
            })}
         </main>
      </div>
   )
}

Log.getLayout = function (page) {
   return <BottomNavigationLayout>{page}</BottomNavigationLayout>
}

export async function getStaticPaths() {
   return {
      paths: (await getLogs()).map((log) => { return { params: { log: log.uri } } }),
      fallback: false,
   }
}

async function getLogs() {
   try {
      await client.connect()

      const database = client.db('journal')
      const logs = database.collection('logs')
      const logIterator = logs.find({})

      return await logIterator.toArray()
   } finally {
      await client.close()
   }
}

export async function getStaticProps() {
   const logs = await getLogs()
   const log = logs[0]

   return {
      props: {
         log: {
            uri: log.uri,
            date: log.date,
            title: log.title,
            subtitle: log.subtitle,
            titleImage: log.titleImage,
            titleImageAlt: log.titleImageAlt,
            paragraphs: log.paragraphs
         }
      }
   }
}
