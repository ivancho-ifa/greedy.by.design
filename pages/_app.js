import 'styles/hamburger-menu.css'
import 'styles/index.css'
import 'the-new-css-reset/css/reset.css'

export default function MyApp({ Component, pageProps }) {
   // Use the layout defined at the page level, if available
   const getLayout = Component.getLayout || ((page) => page)

   return getLayout(<Component {...pageProps} />)
}
