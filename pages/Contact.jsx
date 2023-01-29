import contactStyles from 'styles/Contact.module.css'
import commonStyles from 'styles/common.module.css'
import BottomNavigationLayout from 'components/BottomNavigationLayout'

export default function Contact() {
   return (
      <div className={`${contactStyles.Contact}`}>
         <main className={`${contactStyles.main}`}>
            <form
               action='mailto:greedybydesign@gmail.com'
               method='get'
               enctype='text/plain'
               className={`${contactStyles.form}`}
            >
               <input
                  type='text'
                  placeholder='John Doe'
                  id={`${contactStyles.name}`}
                  className={`${contactStyles.input}`}
               />
               <input
                  type='email'
                  placeholder='john.doe@mail.com'
                  id={`${contactStyles.email}`}
                  className={`${contactStyles.input}`}
               />
               <textarea className={`${contactStyles.textarea}`}></textarea>
               <input
                  type='submit'
                  value='Send'
                  id={`${contactStyles.submit}`}
                  className={`${commonStyles.uppercase} ${contactStyles.input}`}
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

Contact.getLayout = function (page) {
   return <BottomNavigationLayout>{page}</BottomNavigationLayout>
}
