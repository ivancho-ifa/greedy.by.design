import BottomNavigationLayout from 'components/BottomNavigationLayout'
import journalStyles from 'styles/Journal.module.css'
import LogThumbnail from 'components/LogThumbnail'
import { getLogs } from 'utils/logs'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Component, Fragment } from 'react'

class Journal extends Component {
   constructor(props) {
      super(props)

      this.state = {
         showPreview: true,
      }
   }

   togglePreview = (event) => {
      if (event.key === 'Escape') {
         this.setState({ showPreview: !this.state.showPreview })
         console.log(this.state.showPreview)
      }
   }

   componentDidMount() {
      document.addEventListener('keydown', this.togglePreview, false)
   }

   componentWillUnmount() {
      document.removeEventListener('keydown', this.togglePreview, false)
   }

   render() {
      return (
         <div className={`${journalStyles.Journal} ${journalStyles.centralizer}`}>
            <div className={`${journalStyles.logs}`}>
               {this.props.logs.map((log, logId) => {
                  return (<Fragment
                     key={logId}
                  >
                     {(!log.draft || log.draft && !this.state.showPreview) && (<Link
                        href={`${this.props.router.asPath}/${log._id}`}
                     >
                        <LogThumbnail
                           log={log}
                        />
                     </Link>)}
                  </Fragment>
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
