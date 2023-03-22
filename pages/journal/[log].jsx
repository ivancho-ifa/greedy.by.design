import BottomNavigationLayout from 'components/BottomNavigationLayout'
import Image from 'next/image'
import logStyles from 'styles/Log.module.css'
import editLogStyles from 'styles/EditLog.module.css'
import { Component } from 'react'
import sanitizeHtml from 'sanitize-html'
import ContentEditable from 'react-contenteditable'
import { getLogsUris, getLog } from 'utils/logs'

export default class Log extends Component {
   constructor(props) {
      super(props)

      this.state = {
         // Log data
         _id: this.props.log._id,
         draft: true,
         date: new Date(this.props.log.date),
         title: this.props.log.title,
         subtitle: this.props.log.subtitle,
         titleImage: this.props.log.titleImage,
         titleImageAlt: this.props.log.titleImageAlt,
         paragraphs: this.props.log.paragraphs,
         // Component state
         showPreview: true,
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

   render() {
      return (
         <div className={`${logStyles.Log}`}>
            <div className={`${logStyles.logTimeWrapper}`}>
               <time
                  dateTime={this.state.date}
                  className={`${logStyles.logTime}`}
               >
                  {this.state.date.getDate()} {this.state.date.toLocaleString('default', { month: 'short' })}{' '}
                  <span className={`${logStyles.logTimeSeparator}`}></span>
                  {this.state.date.getFullYear()}
               </time>
            </div>

            <header className={`${logStyles.logHeader} ${logStyles.collapsingBottomBorder}`}>
               <div className={`${logStyles.titleImageWrapper}`}>
                  <Image
                     className={`${logStyles.titleImage}`}
                     src={this.state.titleImage}
                     alt={this.state.titleImageAlt}
                     fill
                  />

                  {!this.state.showPreview && (
                     <form id={`${editLogStyles.titleImageForm}`}>
                        <label
                           id={`${editLogStyles.titleImageLabel}`}
                           htmlFor={`${editLogStyles.titleImageInput}`}
                        >
                           Title image URL:
                        </label>
                        <input
                           type='text'
                           id={`${editLogStyles.titleImageInput}`}
                           name='titleImage'
                           value={this.state.titleImage}
                           onChange={(event) => this.handleChange(event)}
                        />

                        <label
                           id={`${editLogStyles.titleImageAltLabel}`}
                           htmlFor={`${editLogStyles.titleImageAltInput}`}
                        >
                           Title image alt text:
                        </label>
                        <input
                           type='text'
                           id={`${editLogStyles.titleImageAltInput}`}
                           name='titleImageAlt'
                           value={this.state.titleImageAlt}
                           onChange={(event) => this.handleChange(event)}
                        />
                     </form>
                  )}
               </div>

               <ContentEditable
                  tagName='h1'
                  className={`${logStyles.title}`}
                  onChange={(event) => this.handleTitleChange(event)}
                  html={this.state.title}
                  disabled={this.state.showPreview}
               />
               <ContentEditable
                  tagName='h2'
                  className={`${logStyles.subtitle}`}
                  onChange={(event) => this.handleSubtitleChange(event)}
                  html={this.state.subtitle}
                  disabled={this.state.showPreview}
               />
            </header>

            <main className={`${logStyles.article}`}>
               {this.state.paragraphs
                  ? this.state.paragraphs.map((_paragraph, paragraphId) => {
                       return (
                          <div key={paragraphId}>
                             <ContentEditable
                                tagName='p'
                                className={`${logStyles.paragraph}`}
                                onChange={(event) => this.handleParagraphChange(event, paragraphId)}
                                html={this.state.paragraphs[paragraphId]}
                                disabled={this.state.showPreview}
                             />

                             {!this.state.showPreview && (
                                <input
                                   type='button'
                                   className={`${editLogStyles.button} ${editLogStyles.editParagraphButton}`}
                                   value='Remove paragraph'
                                   onClick={() => this.removeParagraph(paragraphId)}
                                />
                             )}
                          </div>
                       )
                    })
                  : null}

               {!this.state.showPreview && (
                  <input
                     type='button'
                     id={`${editLogStyles.addParagraphButton}`}
                     className={`${editLogStyles.button}`}
                     value='Add new paragrpah'
                     onClick={() => this.addParagraph()}
                  />
               )}
            </main>

            {!this.state.showPreview && (
               <form id={`${editLogStyles.editPageForm}`}>
                  <input
                     type='button'
                     id={`${editLogStyles.saveDraftButton}`}
                     className={`${editLogStyles.button} ${editLogStyles.editPageButton}`}
                     value='Save draft'
                     onClick={() => this.submit({ draft: true })}
                  />

                  <input
                     type='button'
                     id={`${editLogStyles.publishButton}`}
                     className={`${editLogStyles.button} ${editLogStyles.editPageButton}`}
                     value='Publish page'
                     onClick={() => this.submit({ draft: false })}
                  />
               </form>
            )}
         </div>
      )
   }

   handleChange(event) {
      const { name, value } = event.target
      this.setState({ [name]: value })
   }

   handleTitleChange(event) {
      this.setState({ title: event.target.value })
   }

   handleSubtitleChange(event) {
      this.setState({ subtitle: event.target.value })
   }

   handleParagraphChange(event, key) {
      const sanitizeConf = {
         allowedTags: ['b', 'i', 'a'],
         allowedAttributes: { a: ['href'] },
      }
      const sanitizedContent = sanitizeHtml(event.target.value, sanitizeConf)

      const paragraphs = this.state.paragraphs
         ? this.state.paragraphs.map((paragraph, paragraphId) => {
              if (paragraphId === key) {
                 return sanitizedContent
              }

              return paragraph
           })
         : []
      this.setState({ paragraphs: paragraphs })
   }

   addParagraph() {
      this.setState({ paragraphs: [...this.state.paragraphs, 'Click to edit paragraph'] })
   }

   removeParagraph(key) {
      this.setState({ paragraphs: this.state.paragraphs.filter((_paragraph, index) => index !== key) })
   }

   submit({ draft = true }) {
      this.setState({ draft: draft }, async () => {
         const response = await fetch('/api/update-log', {
            method: 'POST',
            body: this.stringifyLogData(),
         })

         if (response.status === 200) {
            alert('Successfully updated log')
         } else {
            alert(
               `Failed to submit changes to log, error: ${response.status}, ${JSON.stringify(await response.json())}`
            )
         }
      })
   }

   stringifyLogData() {
      return JSON.stringify({
         _id: this.state._id,
         draft: this.state.draft,
         date: this.state.date,
         title: this.state.title,
         subtitle: this.state.subtitle,
         titleImage: this.state.titleImage,
         titleImageAlt: this.state.titleImageAlt,
         paragraphs: this.state.paragraphs,
      })
   }

   static getLayout(page) {
      return <BottomNavigationLayout>{page}</BottomNavigationLayout>
   }
}

export async function getStaticPaths() {
   return {
      paths: await getLogsUris(),
      fallback: 'blocking',
   }
}

export async function getStaticProps({ params }) {
   return {
      props: {
         log: await getLog({ _id: params.log }),
      },
   }
}
