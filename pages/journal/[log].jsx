import BottomNavigationLayout from 'components/BottomNavigationLayout'
import Image from 'next/image'
import logStyles from 'styles/Log.module.css'
import { getLogsUris, getLog } from 'utils/logs'

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
      paths: await getLogsUris(),
      fallback: false,
   }
}

export async function getStaticProps({ params }) {
   return {
      props: {
         log: await getLog({ uri: params.log })
      }
   }
}
