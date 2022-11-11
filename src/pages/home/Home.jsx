import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
   return (
      <div className='Home background column'>
         <div className='expandToFill spreadChildren paddedWithFonstSize'>
            <nav className='menu'>
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
            <footer className='legals'>
               <small>
                  greedy.by.design® is a privately owned design studio nulla gravida hendrerit dignissim. Nullam
                  porttitor accumsan risus, eget venenatis risus pretium
               </small>
               <div className='marginedWithFontSize'></div>
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
         </div>

         <header>
            <h1 className='header'>
               <a
                  href='https://www.instagram.com/greedy.by.design/'
                  target='_blank'
                  rel='author noreferrer'
               >
                  greedy.by.design®
               </a>
            </h1>
         </header>
      </div>
   )
}
