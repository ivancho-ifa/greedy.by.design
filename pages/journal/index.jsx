import BottomNavigationLayout from 'components/BottomNavigationLayout'
import LogThumbnail from 'components/LogThumbnail'
import { getLogs } from 'utils/logs'
import { withRouter } from 'next/router'
import { Component, Fragment } from 'react'
import { isAdmin, withSession } from 'utils/auth'

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
            paragraphs: ['Paragraph'],
            articleContent: {
               time: Date.now(),
               blocks: [],
               version: '2.26.5',
            },
         }),
      })

      const responseBody = await response.text()
      if (response.status === 201) {
         alert('Successfully added log')

         this.props.router.push(`${this.props.router.asPath}/${responseBody}`)
      } else {
         alert(`Failed to add log, error: ${response.status}, ${JSON.stringify(responseBody)}`)
      }
   }

   render() {
      const { data: session, status } = this.props.session
      console.log(`session: ${JSON.stringify(session)}, status: ${status}`)

      return (
         <div className='grid h-fit min-h-screen min-w-full max-w-full grid-cols-1 items-center justify-center justify-items-center bg-black pb-8 font-sans uppercase text-white'>
            <div className='w-11/12 md:w-3/4 xl:w-1/2'>
               {this.props.logs.map((log, logId) => {
                  return (
                     <Fragment key={logId}>
                        {(!log.draft || (log.draft && isAdmin(session) && !this.state.showPreview)) && (
                           <LogThumbnail
                              log={log}
                              showPreview={this.state.showPreview}
                           />
                        )}
                     </Fragment>
                  )
               })}
               {isAdmin(session) && !this.state.showPreview ? (
                  <form
                     className='p-2 pt-1 text-base text-gray'
                     onSubmit={this.addLog}
                  >
                     <div>
                        <label
                           htmlFor='newLogId'
                           className='block'
                        >
                           Create log:
                        </label>
                        <label htmlFor='newLogId'>{this.props.router.asPath}/</label>
                        <input
                           type='text'
                           id='newLogId'
                           className='overflow-ellipsis border-red bg-black text-red placeholder:overflow-ellipsis placeholder:border-red placeholder:text-red'
                           value={this.state.uri}
                           onChange={this.handleUriChange}
                        />
                     </div>
                     <input
                        type='submit'
                        className='mt-0.5 w-full border border-solid border-gray px-3 py-3 text-center uppercase text-gray'
                        value='Add log'
                     />
                  </form>
               ) : null}
            </div>
         </div>
      )
   }

   static getLayout(page) {
      return <BottomNavigationLayout>{page}</BottomNavigationLayout>
   }
}

Journal = withSession(Journal)
Journal = withRouter(Journal)
Journal.getLayout = (page) => {
   return <BottomNavigationLayout>{page}</BottomNavigationLayout>
}

export default Journal

export async function getServerSideProps() {
   return {
      props: {
         logs: await getLogs(),
      },
   }
}
