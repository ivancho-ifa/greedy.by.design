import styles from './Home.module.css'

import { Link } from 'react-router-dom'
import { useRef, useLayoutEffect, useEffect, useState } from 'react'

export default function Home() {
   return (
      <div className={`${styles.Home}`}>
         <div className={`${styles.layout}`}>
            <nav className={`${styles.menu}`}>
               <ul>
                  <li>home</li>
                  <li>
                     <Link to='/studio'>studio</Link>
                  </li>
                  <li>
                     <Link to='/projects'>projects</Link>
                  </li>
                  <li>
                     <Link to='/journal'>journal</Link>
                  </li>
                  <li>
                     <Link to='/shop'>shop</Link>
                  </li>
                  <li>
                     <Link to='/contact'>contact</Link>
                  </li>
               </ul>
            </nav>
            <footer className={`${styles.legals}`}>
               <small className={`${styles.marginBottom}`}>
                  greedy.by.design® is a privately owned design studio nulla gravida hendrerit dignissim. Nullam
                  porttitor accumsan risus, eget venenatis risus pretium
               </small>
               <small>
                  <a href='geo:42.873139,25.310611'>42°52'23.3"N 25°18'38.2"E</a>
                  <br />
                  {'❱'}{' '}
                  <a
                     href='mailto:greedybydesign@gmail.com'
                     target='_blank'
                     rel='author noreferrer'
                  >
                     greedybydesign@gmail.com
                  </a>
                  <br />
                  <a
                     href='https://www.instagram.com/greedy.by.design/'
                     target='_blank'
                     rel='author noreferrer'
                  >
                     @greedy.by.design
                  </a>
                  <br />
                  <time dateTime='2022'>2022</time>
               </small>
            </footer>
            <header className={`${styles.header}`}>
               <h1>
                  <a
                     href='https://www.instagram.com/greedy.by.design/'
                     target='_blank'
                     rel='author noreferrer'
                  >
                     greedy
                     <span className={`${styles.dot}`}></span>
                     by
                     <span className={`${styles.dot}`}></span>
                     design®
                  </a>
               </h1>
            </header>
         </div>
      </div>
   )
}
