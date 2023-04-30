import Paragraph from '@editorjs/paragraph'
import Header from '@editorjs/header'
import NestedList from '@editorjs/nested-list'
import Quote from '@editorjs/quote'
import Delimiter from '@editorjs/delimiter'
import SimpleImage from '@editorjs/simple-image'

export const EDITOR_TOOLS = {
   paragraph: {
      class: Paragraph,
      inlineToolbar: true,
   },
   header: {
      class: Header,
      inlineToolbar: true,
   },
   list: {
      class: NestedList,
      inlineToolbar: true,
   },
   delimiter: {
      class: Delimiter,
      inlineToolbar: true,
   },
   quote: {
      class: Quote,
      inlineToolbar: true,
   },
   image: {
      class: SimpleImage,
      inlineToolbar: true,
   },
}
