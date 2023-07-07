import navigationStyles from 'styles/BottomNavigationLayout.module.css'

import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'

export default function BottomNavigationLayout({ children }) {
   const navigation = useRef()
   const menuToggle = useRef()
   const [navigationHeight, setNavigationHeight] = useState(0)

   useEffect(() => {
      if (!menuToggle.current.checked) {
         setNavigationHeight(navigation.current.clientHeight)
      }
   }, [navigation])

   return (
      <div id={`${navigationStyles.root}`}>
         <div
            className={`${navigationStyles.page}`}
            style={{ marginBottom: navigationHeight }}
         >
            {children}
         </div>

         <nav
            className={`${navigationStyles.Navigation} ${navigationStyles.row} ${navigationStyles.spreadChildren} ${navigationStyles.padded}}`}
            ref={navigation}
            style={{ position: 'fixed', bottom: 0 }}
         >
            <input
               id={`${navigationStyles.menuToggle}`}
               type='checkbox'
               ref={menuToggle}
            />
            <label
               className={`${navigationStyles.menuButtonContainer}`}
               htmlFor={`${navigationStyles.menuToggle}`}
            >
               <div className={`${navigationStyles.menuButton}`}></div>
            </label>

            <ul className={`${navigationStyles.menu} ${navigationStyles.hamburgerMenu}`}>
               <li className={`${navigationStyles.home}`}>
                  <Link href='/'>home</Link>
               </li>
               <li className={`${navigationStyles.journal}`}>
                  <Link href='/journal'>journal</Link>
               </li>
               <li className={`${navigationStyles.contact}`}>
                  <Link href='/contact'>contact</Link>
               </li>
            </ul>
            <ul className={`${navigationStyles.icons} ${navigationStyles.hamburgerMenu}`}>
               <li className={`${navigationStyles.youtube}`}>
                  <a href='youtube.com'>
                     <img
                        className={`${navigationStyles.icon}`}
                        src='/youtube.svg'
                        alt='YouTube'
                     />
                  </a>
               </li>
               <li className={`${navigationStyles.twitter}`}>
                  <a href='twitter.com'>
                     <img
                        className={`${navigationStyles.icon}`}
                        src='/twitter.svg'
                        alt='Twitter'
                     />
                  </a>
               </li>
               <li className={`${navigationStyles.instagram}`}>
                  <a href='instagram.com'>
                     <img
                        className={`${navigationStyles.icon}`}
                        src='/instagram.svg'
                        alt='Instagram'
                     />
                  </a>
               </li>
            </ul>
         </nav>
      </div>
   )
}
