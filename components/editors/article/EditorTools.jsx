import Paragraph from '@editorjs/paragraph'
import Header from '@editorjs/header'
import NestedList from '@editorjs/nested-list'
import Quote from '@editorjs/quote'
import Delimiter from '@editorjs/delimiter'

export const EDITOR_TOOLS = {
   paragraph: Paragraph,
   header: Header,
   list: { class: NestedList, inlineToolbar: true },
   delimiter: Delimiter,
   quote: Quote,
}
