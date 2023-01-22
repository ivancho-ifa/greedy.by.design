import navigationStyles from './Navigation.module.css'
import './hamburger-menu.css'

import { Link, Outlet } from 'react-router-dom'

export default function Navigation() {
   return (
      <div id={`${navigationStyles.root}`}>
         <div className={`${navigationStyles.page}`}>
            <Outlet />
         </div>

         <nav
            className={`${navigationStyles.Navigation} ${navigationStyles.row} ${navigationStyles.spreadChildren} ${navigationStyles.padded}}`}
         >
            <input
               id={`${navigationStyles.menuToggle}`}
               type='checkbox'
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
