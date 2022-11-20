import './Navigation.css'

import { Link, Outlet } from 'react-router-dom'
import { Fragment, useRef } from 'react'
import { useStyleFullscreenExcludingNavigation } from './utils/componentManipulation'

export default function Navigation() {
   const navigation = useRef()
   const styleFullscreenExcludingNavigation = useStyleFullscreenExcludingNavigation(navigation)

   console.log(`style: ${JSON.stringify(styleFullscreenExcludingNavigation)}`)

   return (
      <Fragment>
         <div style={styleFullscreenExcludingNavigation}>
            <Outlet />
         </div>

         <nav
            ref={navigation}
            className='Navigation row spreadChildren padded'
         >
            <ul className='row'>
               <li className='marginedSides'>
                  <Link to='/'>home</Link>
               </li>
               <li className='marginedSides'>
                  <Link to='/studio'>studio</Link>
               </li>
               <li className='marginedSides'>
                  <Link to='/projects'>projects</Link>
               </li>
               <li className='marginedSides'>
                  <Link to='/journal'>journal</Link>
               </li>
               <li className='marginedSides'>
                  <Link to='/shop'>shop</Link>
               </li>
               <li className='marginedSides'>
                  <Link to='/contact'>contact</Link>
               </li>
            </ul>
            <ul className='row'>
               <li className='smallMarginedSides'>
                  <a href='youtube.com'>
                     <img
                        className='icon'
                        src='/youtube.svg'
                        alt='YouTube'
                     />
                  </a>
               </li>
               <li className='smallMarginedSides'>
                  <a href='twitter.com'>
                     <img
                        className='icon'
                        src='/twitter.svg'
                        alt='Twitter'
                     />
                  </a>
               </li>
               <li className='smallMarginedSides'>
                  <a href='instagram.com'>
                     <img
                        className='icon'
                        src='/instagram.svg'
                        alt='Instagram'
                     />
                  </a>
               </li>
            </ul>
         </nav>
      </Fragment>
   )
}
