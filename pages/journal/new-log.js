import BottomNavigationLayout from 'components/BottomNavigationLayout'
import Image from 'next/image'
import logStyles from 'styles/Log.module.css'
import { Component, useRef, useState, Fragment } from 'react'
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
         <Fragment>
            <div className={`${logStyles.Log}`}>
               <div className={`${logStyles.logTimeWrapper}`}>
                  <time
                     dateTime={this.state.date}
                     className={`${logStyles.logTime}`}
                  >
                     {this.state.date.getDate()} {this.state.date.toLocaleString('default', { month: 'short' })}{' '}
                     <span className={`${logStyles.logTimeSeparator}`}></span> 2023
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
                     <form style={{
                        color: 'gray',
                        display: 'grid',
                        gridTemplateAreas:
                           `'label1 input1'
                            'label2 input2'`
                     }}>
                        <label
                           htmlFor="titleImage"
                           style={{
                              gridArea: 'label1'
                           }}>
                           Title image URL:
                        </label>
                        <input
                           type="text"
                           id='titleImage'
                           name='titleImage'
                           value={this.state.titleImage}
                           onChange={(event) => this.handleChange(event)}
                           style={{
                              gridArea: 'input1'
                           }}
                        />
                        <label
                           htmlFor="titleImageAlt"
                           style={{
                              gridArea: 'label2'
                           }}>
                           Title image alt text:
                        </label>
                        <input
                           type="text"
                           id='titleImageAlt'
                           name='titleImageAlt'
                           value={this.state.titleImageAlt}
                           onChange={(event) => this.handleChange(event)}
                           style={{
                              gridArea: 'input2'
                           }} />
                     </form>
                  </div>
                  <ContentEditable
                     className={`${logStyles.title}`}
                     onChange={(event) => this.handleTitleChange(event)}
                     html={this.state.title} />
                  <ContentEditable
                     className={`${logStyles.subtitle}`}
                     onChange={(event) => this.handleSubtitleChange(event)}
                     html={this.state.subtitle} />
               </header>
               <main className={`${logStyles.article}`}>
                  {this.state.paragraphs.map((_paragraph, paragraphId) => {
                     return (
                        <div>
                           <ContentEditable
                              className={`${logStyles.paragraph}`}
                              key={paragraphId}
                              onChange={(event) => this.handleParagraphChange(event, paragraphId)}
                              html={this.state.paragraphs[paragraphId]} />
                           <input
                              type="button"
                              key={`button-${paragraphId}`}
                              value='Remove paragraph'
                              onClick={() => this.removeParagraph(paragraphId)}
                              style={{
                                 color: 'gray',
                                 fontSize: '.5em',
                                 border: '1px solid gray',
                                 padding: '1em 1.5em'
                              }} />
                        </div>
                     )
                  })}
                  <input
                     type='button'
                     value='Add new paragrpah'
                     onClick={() => this.addParagraph()}
                     style={{
                        color: 'gray',
                        border: '1px solid gray',
                        padding: '1em 1.5em',
                        marginTop: '2em'
                     }} />
               </main>

               <form
                  style={{
                     color: 'gray',
                     display: 'grid',
                     gridTemplateAreas:
                        `'label1 input1'
                        'input2 input3'`,
                     justifyItems: 'stretch',
                     alignItems: 'center',
                     justifyContent: 'stretch',
                     alignContent: 'center',
                  }}>
                  <label
                     htmlFor="urlInput"
                     style={{
                        gridArea: 'label1',
                        justifySelf: 'right',
                     }}
                  >
                     URL of the page: http://.../journal/
                  </label>
                  <input
                     type="text"
                     id='urlInput'
                     name='uri'
                     value={this.state.uri}
                     onChange={(event) => this.handleChange(event)}
                     style={{
                        justifySelf: 'left',
                        gridArea: 'input1',
                     }}
                  />

                  <input
                     type='button'
                     value='Save draft'
                     onClick={() => this.submit({ draft: true })}
                     style={{
                        gridArea: 'input2',
                        color: 'gray',
                        border: '1px solid gray',
                        padding: '1em 1.5em',
                        marginTop: '1em',
                        textAlign: 'center',
                     }} />

                  <input type='button'
                     value='Publish page'
                     onClick={() => this.submit({ draft: false })}
                     style={{
                        gridArea: 'input3',
                        color: 'gray',
                        border: '1px solid gray',
                        padding: '1em 1.5em',
                        textAlign: 'center',
                        marginTop: '1em',
                     }} />
               </form>
            </div >
         </Fragment>
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
