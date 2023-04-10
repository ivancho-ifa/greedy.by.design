import Blocks from 'editorjs-blocks-react-renderer'
import logStyles from 'styles/Log.module.css'

export default function Renderer({ data, config }) {
   return (
      <Blocks
         data={data}
         config={{
            ...config,
            paragraph: {
               className: logStyles.paragraph,
            },
            header: {
               className: logStyles.paragraphHeader,
            },
            list: {
               className: logStyles.list,
            },
            delimiter: {
               className: `${logStyles.collapsingBottomBorder} ${logStyles.delimiter}`,
            },
            quote: {
               className: `${logStyles.paragraph}, ${logStyles.quote}`,
            },
            image: {
               className: `${logStyles.image}`,
            },
         }}
      />
   )
}
