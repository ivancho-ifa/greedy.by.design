import contactStyles from 'styles/Contact.module.css'
import commonStyles from 'styles/common.module.css'
import BottomNavigationLayout from 'components/BottomNavigationLayout'
import Link from 'next/link'

export default function Contact() {
   return (
      <div className={`${contactStyles.Contact}`}>
         In order to delete your data send us a request at <Link href='/Contact'>/Contact</Link>
      </div>
   )
}

Contact.getLayout = function (page) {
   return <BottomNavigationLayout>{page}</BottomNavigationLayout>
}
