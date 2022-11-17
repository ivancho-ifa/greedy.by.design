import './Contact.css'

export default function Contact(props) {
   return (
      <form
         action='mailto:greedybydesign@gmail.com'
         method='get'
         enctype='text/plain'
      >
         <div className='row spreadChildren'>
            <input
               type='text'
               placeholder='John Doe'
               className='expandToFill padded'
            />
            <input
               type='email'
               placeholder='john.doe@mail.com'
               className='expandToFill padded'
            />
         </div>
      </form>
   )
}

// return (
//    <div className='Contact'>
//       <form action=''>
//          <div className='inputArea'>
//             <div className='row spreadChildren'>
//                <input
//                   type='text'
//                   className='inputField'
//                />
//                <input
//                   type='email'
//                   className='inputField'
//                />
//             </div>
//             <textarea
//                name=''
//                id=''
//                cols='30'
//                rows='10'
//             ></textarea>
//          </div>
//          <input
//             type='submit'
//             value=''
//          />
//       </form>
//       <p>
//          or message us on <a href='mailto:greedybydesign@gmail.com'>greedybydesign@gmail.com</a>
//       </p>
//       <footer>greedy.by.design @2022</footer>
//    </div>
// )
