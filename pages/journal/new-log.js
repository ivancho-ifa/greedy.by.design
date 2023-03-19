import BottomNavigationLayout from 'components/BottomNavigationLayout'
import Image from 'next/image'
import logStyles from 'styles/Log.module.css'
import editLogStyles from 'styles/EditLog.module.css'
import { Component, Fragment } from 'react'
import sanitizeHtml from 'sanitize-html'
import ContentEditable from 'react-contenteditable'

export default class NewLog extends Component {
   constructor() {
      super()
      this.state = {
         uri: '',
         draft: true,
         date: new Date(),
         title: 'Click to edit title',
         subtitle: 'Click to edit subtitle',
         titleImage: '',
         titleImageAlt: 'Title image alternative text',
         paragraphs: ['Click to edit paragraph']
      }
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

                  <form id={`${editLogStyles.titleImageForm}`}>
                     <label
                        id={`${editLogStyles.titleImageLabel}`}
                        htmlFor={`${editLogStyles.titleImageInput}`}
                     >
                        Title image URL:
                     </label>
                     <input
                        type="text"
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
                        type="text"
                        id={`${editLogStyles.titleImageAltInput}`}
                        name='titleImageAlt'
                        value={this.state.titleImageAlt}
                        onChange={(event) => this.handleChange(event)}
                     />
                  </form>
               </div>

               <ContentEditable
                  tagName='h1'
                  className={`${logStyles.title}`}
                  onChange={(event) => this.handleTitleChange(event)}
                  html={this.state.title}
               />
               <ContentEditable
                  tagName='h2'
                  className={`${logStyles.subtitle}`}
                  onChange={(event) => this.handleSubtitleChange(event)}
                  html={this.state.subtitle}
               />
            </header>

            <main className={`${logStyles.article}`}>
               {this.state.paragraphs.map((_paragraph, paragraphId) => {
                  return (
                     <div key={paragraphId}>
                        <ContentEditable
                           tagName='p'
                           className={`${logStyles.paragraph}`}
                           onChange={(event) => this.handleParagraphChange(event, paragraphId)}
                           html={this.state.paragraphs[paragraphId]}
                        />

                        <input
                           type="button"
                           className={`${editLogStyles.button} ${editLogStyles.editParagraphButton}`}
                           value='Remove paragraph'
                           onClick={() => this.removeParagraph(paragraphId)}
                        />
                     </div>
                  )
               })}

               <input
                  type='button'
                  id={`${editLogStyles.addParagraphButton}`}
                  className={`${editLogStyles.button}`}
                  value='Add new paragrpah'
                  onClick={() => this.addParagraph()}
               />
            </main>

            <form id={`${editLogStyles.editPageForm}`}>
               <label
                  id={`${editLogStyles.urlLabel}`}
                  htmlFor={`${editLogStyles.urlInput}`}
               >
                  URL of the page: http://.../journal/
               </label>
               <input
                  type="text"
                  id={`${editLogStyles.urlInput}`}
                  name='uri'
                  value={this.state.uri}
                  onChange={(event) => this.handleChange(event)}
               />

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
         </div >
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
         allowedAttributes: { a: ['href'] }
      }
      const sanitizedContent = sanitizeHtml(event.target.value, sanitizeConf)

      const paragraphs = this.state.paragraphs.map((paragraph, paragraphId) => {
         if (paragraphId === key) {
            return sanitizedContent
         }

         return paragraph
      })
      this.setState({ paragraphs: paragraphs })
   }

   addParagraph() {
      this.setState({ paragraphs: [...this.state.paragraphs, 'Click to edit paragraph'] })
   }

   removeParagraph(key) {
      this.setState({ paragraphs: this.state.paragraphs.filter((_paragraph, index) => index !== key) })
   }

   async submit({ draft = true }) {
      this.setState({ draft: draft })

      const response = await fetch("/api/logs", {
         method: "POST",
         body: JSON.stringify(this.state),
      })

      if (response.status === 201) {
         alert('Successfully submitted content')
      } else {
         alert(`Failed to submit content, error: ${response.status}, ${response.body.what}`)
      }
   }
}

NewLog.getLayout = function (page) {
   return <BottomNavigationLayout>{page}</BottomNavigationLayout>
}
