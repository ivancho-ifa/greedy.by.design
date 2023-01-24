import contactStyles from './Contact.module.css'
import commonStyles from '../../css/common.module.css'

export default function Contact() {
   return (
      <div className={`${contactStyles.Contact}`}>
         <main>
            <form
               action='mailto:greedybydesign@gmail.com'
               method='get'
               enctype='text/plain'
            >
               <input
                  type='text'
                  placeholder='John Doe'
                  id={`${contactStyles.name}`}
               />
               <input
                  type='email'
                  placeholder='john.doe@mail.com'
                  id={`${contactStyles.email}`}
               />
               <textarea></textarea>
               <input
                  type='submit'
                  value='Send'
                  id={`${contactStyles.submit}`}
                  className={`${commonStyles.uppercase}`}
               />
            </form>
            <div className={`${contactStyles.alternative} ${commonStyles.centerText} ${commonStyles.uppercase}`}>
               <span className={`${contactStyles.notImportant}`}>or message us on </span>
               <span className={`${contactStyles.important}`}>
                  <a href='mailto:greedybydesign@gmail.com'>greedybydesign@gmail.com</a>
               </span>
            </div>
         </main>
         <footer className={`${contactStyles.footer} ${commonStyles.centerText} ${commonStyles.uppercase}`}>
            greedy.by.design <span className={`${contactStyles.subfooter}`}>@2022</span>
         </footer>
      </div>
   )
}
