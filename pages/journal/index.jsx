import BottomNavigationLayout from 'components/BottomNavigationLayout'
import journalStyles from 'styles/Journal.module.css'
import LogThumbnail from 'components/LogThumbnail'
import { getLogs } from 'utils/logs'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Component } from 'react'

class Journal extends Component {
   render() {
      return (
         <div className={`${journalStyles.Journal} ${journalStyles.centralizer}`}>
            <div className={`${journalStyles.logs}`}>
               {this.props.logs.map((log, logId) => {
                  return (
                     <Link
                        href={`${this.props.router.asPath}/${log._id}`}
                        key={logId}
                     >
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

   static getLayout(page) {
      return <BottomNavigationLayout>{page}</BottomNavigationLayout>
   }
}

const WithRouterWrapper = withRouter(Journal)
WithRouterWrapper.getLayout = Journal.getLayout

export default WithRouterWrapper

export async function getStaticProps() {
   return {
      props: {
         logs: await getLogs(),
      },
   }
}
