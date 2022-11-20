import navigationStyles from './Navigation.module.css'
import { useStyleFullscreenExcludingNavigation } from './utils/componentManipulation'

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
            <ul className={`${navigationStyles.row}`}>
               <li className={`${navigationStyles.marginedSides}`}>
                  <Link to='/'>home</Link>
               </li>
               <li className={`${navigationStyles.marginedSides}`}>
                  <Link to='/studio'>studio</Link>
               </li>
               <li className={`${navigationStyles.marginedSides}`}>
                  <Link to='/projects'>projects</Link>
               </li>
               <li className={`${navigationStyles.marginedSides}`}>
                  <Link to='/journal'>journal</Link>
               </li>
               <li className={`${navigationStyles.marginedSides}`}>
                  <Link to='/shop'>shop</Link>
               </li>
               <li className={`${navigationStyles.marginedSides}`}>
                  <Link to='/contact'>contact</Link>
               </li>
            </ul>
            <ul className={`${navigationStyles.row}`}>
               <li className={`${navigationStyles.smallMarginedSides}`}>
                  <a href='youtube.com'>
                     <img
                        className={`${navigationStyles.icon}`}
                        src='/youtube.svg'
                        alt='YouTube'
                     />
                  </a>
               </li>
               <li className={`${navigationStyles.smallMarginedSides}`}>
                  <a href='twitter.com'>
                     <img
                        className={`${navigationStyles.icon}`}
                        src='/twitter.svg'
                        alt='Twitter'
                     />
                  </a>
               </li>
               <li className={`${navigationStyles.smallMarginedSides}`}>
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
