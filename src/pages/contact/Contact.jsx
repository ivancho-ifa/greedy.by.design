import './Contact.css'

export default function Contact(props) {
   return (
      <div className='Contact'>
         <form action=''>
            <div>
               <div className='row'>
                  <input
                     type='text'
                     className='backgroundColorWhite'
                  />
                  <input
                     type='email'
                     className='backgroundColorWhite'
                  />
               </div>
               <textarea
                  name=''
                  id=''
                  cols='30'
                  rows='10'
                  className='backgroundColorWhite'
               ></textarea>
            </div>
            <input
               type='submit'
               value=''
               className='backgroundColorWhite'
            />
         </form>
         <p>
            or message us on <a href='mailto:greedybydesign@gmail.com'>greedybydesign@gmail.com</a>
         </p>
         <footer>greedy.by.design @2022</footer>
      </div>
   )
}
