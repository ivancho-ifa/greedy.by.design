import Paragraph from '@editorjs/paragraph'
import Header from '@editorjs/header'
import NestedList from '@editorjs/nested-list'
import Quote from '@editorjs/quote'
import Delimiter from '@editorjs/delimiter'
import SimpleImage from '@editorjs/simple-image'
import logStyles from 'styles/Log.module.css'

export const EDITOR_TOOLS = {
   paragraph: Paragraph,
   header: {
      class: Header,
   },
   list: { class: NestedList, inlineToolbar: true },
   delimiter: Delimiter,
   quote: Quote,
   image: SimpleImage,
}
