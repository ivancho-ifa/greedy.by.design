import navigationStyles from './Navigation.module.css'
import './hamburger-menu.css'

import { Link, Outlet } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'

export default function Navigation() {
   const navigation = useRef()
   const hamburgerMenuToggle = useRef()
   const [navigationHeight, setNavigationHeight] = useState(0)

   useEffect(() => {
      if (!hamburgerMenuToggle.current.checked) {
         setNavigationHeight(navigation.current.clientHeight)
      }
   })

   return (
      <div id={`${navigationStyles.root}`}>
         <div
            className={`${navigationStyles.page}`}
            style={{ marginBottom: navigationHeight }}
         >
            <Outlet />
         </div>

         <nav
            className={`${navigationStyles.Navigation} ${navigationStyles.row} ${navigationStyles.spreadChildren} ${navigationStyles.padded}}`}
            ref={navigation}
            style={{ position: 'fixed', bottom: 0 }}
         >
            <input
               id={`${navigationStyles.menuToggle}`}
               type='checkbox'
               ref={hamburgerMenuToggle}
            />
            <label
               class={`${navigationStyles.menuButtonContainer}`}
               for={`${navigationStyles.menuToggle}`}
            >
               <div class={`${navigationStyles.menuButton}`}></div>
            </label>

            <ul className={`${navigationStyles.menu} ${navigationStyles.hamburgerMenu}`}>
               <li className={`${navigationStyles.home}`}>
                  <Link to='/'>home</Link>
               </li>
               <li className={`${navigationStyles.studio}`}>
                  <Link to='/studio'>studio</Link>
               </li>
               <li className={`${navigationStyles.projects}`}>
                  <Link to='/projects'>projects</Link>
               </li>
               <li className={`${navigationStyles.journal}`}>
                  <Link to='/journal'>journal</Link>
               </li>
               <li className={`${navigationStyles.shop}`}>
                  <Link to='/shop'>shop</Link>
               </li>
               <li className={`${navigationStyles.contact}`}>
                  <Link to='/contact'>contact</Link>
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
