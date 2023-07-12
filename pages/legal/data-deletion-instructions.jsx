import BottomNavigationLayout from 'components/BottomNavigationLayout'
import Link from 'next/link'

export default function DataDeletion() {
   return (
      <div className='grid h-full place-items-center bg-[black] text-center font-sans text-[white]'>
         <main>
            In order to delete your data send us a request at{' '}
            <Link
               href='/contact'
               className='text-[red]'
            >
               /contact
            </Link>
         </main>
      </div>
   )
}

DataDeletion.getLayout = function (page) {
   return <BottomNavigationLayout>{page}</BottomNavigationLayout>
}
