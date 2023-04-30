import 'the-new-css-reset/css/reset.css'
import 'styles/index.css'
import 'styles/fonts.css'
import { Analytics } from '@vercel/analytics/react'
import { Fragment } from 'react'

export default function MyApp({ Component, pageProps }) {
   // Use the layout defined at the page level, if available
   const getLayout = Component.getLayout || ((page) => page)

   return (
      <Fragment>
         {getLayout(<Component {...pageProps} />)}
         <Analytics />
      </Fragment>
   )
}
