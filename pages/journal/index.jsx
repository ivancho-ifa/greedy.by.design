import BottomNavigationLayout from 'components/BottomNavigationLayout'
import journalStyles from 'styles/Journal.module.css'
import LogThumbnail from 'components/LogThumbnail'
import { getLogs } from 'utils/logs'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Journal({ logs }) {
   const router = useRouter()

   return (
      <div className={`${journalStyles.Journal} ${journalStyles.centralizer}`}>
         <div className={`${journalStyles.logs}`}>
            {logs.map((log, logId) => {
               return (
                  <Link href={`${router.asPath}/${log.uri}`} key={logId}>
                     <LogThumbnail
                        date={log.date}
                        title={log.title}
                        titleImage={log.titleImage}
                        titleImageAlt={log.titleImageAlt}
                     />
                  </Link>
               )
            })}
         </div>
      </div>
   )
}

Journal.getLayout = function (page) {
   return <BottomNavigationLayout>{page}</BottomNavigationLayout>
}

export async function getStaticProps() {
   return {
      props: {
         logs: await getLogs()
      }
   }
}
