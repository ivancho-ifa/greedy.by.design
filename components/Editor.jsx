import EditorJS from '@editorjs/editorjs'
import CheckList from '@editorjs/checklist'
import CodeBox from '@bomdi/codebox'
import Delimiter from '@editorjs/delimiter'
import Embed from '@editorjs/embed'
import InlineCode from '@editorjs/inline-code'
import LinkTool from '@editorjs/link'
import List from '@editorjs/list'
import Quote from '@editorjs/quote'
import SimpleImage from '@editorjs/simple-image'
import Header from '@editorjs/header'
import React, { useEffect, useRef } from 'react'

export default function Editor({ data, onChange, holder }) {
   //add a reference to editor
   const ref = useRef()

   //initialize editorjs
   useEffect(() => {
      //initialize editor if we don't have a reference
      if (!ref.current) {
         const editor = new EditorJS({
            holder: holder,
            tools: {
               embed: Embed,
               header: Header,
               list: List,
               codeBox: CodeBox,
               linkTool: LinkTool,
               quote: Quote,
               checklist: CheckList,
               delimiter: Delimiter,
               inlineCode: InlineCode,
               simpleImage: SimpleImage,
            },
            data,
            async onChange(api, _event) {
               const data = await api.saver.save()
               onChange(data)
            },
         })
         ref.current = editor
      }

      //add a return function handle cleanup
      return () => {
         if (ref.current && ref.current.destroy) {
            ref.current.destroy()
         }
      }
   })

   return <div id={holder} />
}
