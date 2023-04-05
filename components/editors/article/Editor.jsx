import React, { memo, useEffect, useRef } from 'react'
import EditorJS from '@editorjs/editorjs'
import { EDITOR_TOOLS } from './EditorTools'

const ArticleEditor = ({ data, onChange, holder }) => {
   const ref = useRef()

   useEffect(() => {
      if (!ref.current) {
         const editor = new EditorJS({
            holder: holder,
            tools: EDITOR_TOOLS,
            data,
            async onChange(api, event) {
               const data = await api.saver.save()
               onChange(data)
            },
            hideToolbar: false,
         })
         ref.current = editor
      }

      return () => {
         if (ref.current && ref.current.destroy) {
            ref.current.destroy()
         }
      }
   }, [])

   return (
      <div
         id={holder}
         className='prose max-w-full'
      />
   )
}

export default memo(ArticleEditor)
