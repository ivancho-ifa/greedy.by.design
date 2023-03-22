import BottomNavigationLayout from 'components/BottomNavigationLayout'
import journalStyles from 'styles/Journal.module.css'
import LogThumbnail from 'components/LogThumbnail'
import { getLogs } from 'utils/logs'
import { withRouter } from 'next/router'
import { Component, Fragment } from 'react'
import editJournalStyles from 'styles/EditJournal.module.css'

class Journal extends Component {
   constructor(props) {
      super(props)

      this.state = {
         showPreview: true,
         uri: 'example-id',
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

   handleUriChange = (event) => {
      this.setState({ uri: event.target.value })
   }

   addLog = async (event) => {
      event.preventDefault()

      const response = await fetch('/api/add-log', {
         method: 'POST',
         body: JSON.stringify({
            _id: this.state.uri,
            draft: true,
            date: new Date(),
            title: 'Title',
            subtitle: 'Subtitle',
            titleImage: 'https://i49.vbox7.com/o/5f5/5f52f1b40.jpg',
            titleImageAlt: 'Title image alternative text',
            paragraphs: [
               'Paragraph'
            ]
         }),
      })

      const responseBody = await response.text()
      if (response.status === 201) {
         alert('Successfully added log')

         this.props.router.push(`${this.props.router.asPath}/${responseBody}`)
      } else {
         alert(
            `Failed to add log, error: ${response.status}, ${JSON.stringify(responseBody)}`
         )
      }
   }

   render() {
      return (
         <div className={`${journalStyles.Journal} ${journalStyles.centralizer}`}>
            <div className={`${journalStyles.logs}`}>
               {this.props.logs.map((log, logId) => {
                  return (<Fragment
                     key={logId}
                  >
                     {(!log.draft || log.draft && !this.state.showPreview) && (
                        <LogThumbnail
                           log={log}
                           showPreview={this.state.showPreview}
                        />
                     )}
                  </Fragment>
                  )
               })}

               {!this.state.showPreview ?
                  <form className={`${editJournalStyles.addLog}`} onSubmit={this.addLog}>
                     <div>
                        <label htmlFor={`${editJournalStyles.addLogInput}`} className={`${editJournalStyles.label}`}>Create log:</label>
                        <label htmlFor={`${editJournalStyles.addLogInput}`}>{this.props.router.asPath}/</label>
                        <input type="text" id={`${editJournalStyles.addLogInput}`} value={this.state.uri} onChange={this.handleUriChange} />
                     </div>
                     <input type="submit" className={`${editJournalStyles.button}`} value="Add URI" />
                  </form> :
                  null
               }
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
