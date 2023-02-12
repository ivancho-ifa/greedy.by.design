import BottomNavigationLayout from 'components/BottomNavigationLayout'
import Image from 'next/image'
import logStyles from 'styles/Log.module.css'

export default function Log() {
   return (
      <div className={`${logStyles.Log}`}>
         <div className={`${logStyles.logTimeWrapper}`}>
            <time
               dateTime='Sun Feb 05 2023'
               className={`${logStyles.logTime}`}
            >
               Feb 05 <span className={`${logStyles.logTimeSeparator}`}></span> 2023
            </time>
         </div>

         <header className={`${logStyles.logHeader} ${logStyles.collapsingBottomBorder}`}>
            <div className={`${logStyles.titleImageWrapper}`}>
               <Image
                  className={`${logStyles.titleImage}`}
                  src='http://placeimg.com/640/480/sports'
                  alt='Title image'
                  fill
               />
            </div>
            <h1 className={`${logStyles.title}`}>Magnam incidunt unde.</h1>
            <h2 className={`${logStyles.subtitle}`}>Eaque est debitis quia necessitatibus exercitationem omnis.</h2>
         </header>

         <main className={`${logStyles.article}`}>
            <p className={`${logStyles.paragraph}`}>
               Accusamus quam neque non. Quam dolorem aspernatur. Unde voluptas cupiditate est. Qui cupiditate omnis
               neque molestias est a nemo.
            </p>
            <p className={`${logStyles.paragraph}`}>
               Sed velit numquam recusandae culpa fugit quam ipsum et optio. Molestiae voluptatem sunt porro laboriosam
               aut hic corrupti. Nulla quia qui eum debitis consequatur.
            </p>
            <p className={`${logStyles.paragraph}`}>
               In aspernatur quia eum ex ipsum est modi est quidem. Et nulla a quidem. Culpa quia praesentium aut dolor
               molestiae expedita eaque. Occaecati veniam est expedita suscipit aperiam vitae. Ipsam consequuntur
               commodi sit repellat. Et impedit voluptatem .
            </p>
         </main>
      </div>
   )
}

Log.getLayout = function (page) {
   return <BottomNavigationLayout>{page}</BottomNavigationLayout>
}
