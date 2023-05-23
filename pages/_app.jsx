import 'the-new-css-reset/css/reset.css'
import 'styles/index.css'
import 'styles/fonts.css'
import { Analytics } from '@vercel/analytics/react'
import { Fragment } from 'react'
import { SessionProvider } from 'next-auth/react'

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
   // Use the layout defined at the page level, if available
   const getLayout = Component.getLayout || ((page) => page)

   return (
      <Fragment>
         <SessionProvider session={session}>
            {getLayout(<Component {...pageProps} />)}
            <Analytics />
         </SessionProvider>
      </Fragment>
   )
}
