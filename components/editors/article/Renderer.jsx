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
         }}
      />
   )
}
