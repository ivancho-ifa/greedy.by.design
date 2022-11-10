import logo from './logo.svg'
import './App.css'

function App() {
   return (
      <div className='App background column'>
         <div className='columnCell'>
            <div className='menu'>
               <ul>
                  <li>home</li>
                  <li>studio</li>
                  <li>projects</li>
                  <li>journal</li>
                  <li>shop</li>
                  <li>contact</li>
               </ul>
            </div>
            <div className='legals'>
               <p>
                  greedy.by.design is a privately owned design studio nulla gravida hendrerit dignissim. Nullam
                  porttitor accumsan risus, eget venenatis risus pretium
               </p>
               <p>
                  42°52'23.3"N 25°18'38.2"E
                  <br />
                  {'>'} greedy.by.design@gmail.com
                  <br />
                  ® GREEDY BY DESIGN
                  <br />® 2022
               </p>
            </div>
         </div>
         <div className='header'>greedy.by.design®</div>
      </div>
   )
}

export default App
