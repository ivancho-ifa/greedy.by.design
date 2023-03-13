import BottomNavigationLayout from 'components/BottomNavigationLayout'
import Image from 'next/image'
import logStyles from 'styles/Log.module.css'

export default function Log({ log }) {
   const logDate = new Date(log.date)

   return (
      <div className={`${logStyles.Log}`}>
         <div className={`${logStyles.logTimeWrapper}`}>
            <time
               dateTime={log.date}
               className={`${logStyles.logTime}`}
            >
               {logDate.getDate()} {logDate.toLocaleString('default', { month: 'short' })}{' '}
               <span className={`${logStyles.logTimeSeparator}`}></span> 2023
            </time>
         </div>

         <header className={`${logStyles.logHeader} ${logStyles.collapsingBottomBorder}`}>
            <div className={`${logStyles.titleImageWrapper}`}>
               <Image
                  className={`${logStyles.titleImage}`}
                  src={log.titleImage}
                  alt={log.titleImageAlt}
                  fill
               />
            </div>
            <h1 className={`${logStyles.title}`}>{log.title}</h1>
            <h2 className={`${logStyles.subtitle}`}>{log.subtitle}</h2>
         </header>

         <main className={`${logStyles.article}`}>
            {log.paragraphs.map((paragraph, paragraphId) => {
               return (
                  <p
                     className={`${logStyles.paragraph}`}
                     key={paragraphId}
                  >
                     {paragraph}
                  </p>
               )
            })}
         </main>
      </div>
   )
}

Log.getLayout = function (page) {
   return <BottomNavigationLayout>{page}</BottomNavigationLayout>
}

export async function getStaticPaths() {
   return {
      paths: [{ params: { log: 'a' } }],
      fallback: false,
   }
}

export async function getStaticProps() {
   return {
      props: {
         log: {
            date: new Date('Sun Feb 05 2023 GMT+0200 (Eastern European Standard Time)').toJSON(),
            title: 'Voluptas voluptatem molestiae fuga vel reprehenderit dolores.',
            subtitle: 'Eaque est debitis quia necessitatibus exercitationem omnis.',
            titleImage: 'http://placeimg.com/640/480/fashion',
            titleImageAlt: 'Alias ipsam delectus non nostrum magnam nemo numquam id doloremque.',
            paragraphs: [
               'Accusamus quam neque non. Quam dolorem aspernatur. Unde voluptas cupiditate est. Qui cupiditate omnis neque molestias est a nemo.',
               'Sed velit numquam recusandae culpa fugit quam ipsum et optio. Molestiae voluptatem sunt porro laboriosam aut hic corrupti. Nulla quia qui eum debitis consequatur.',
               'In aspernatur quia eum ex ipsum est modi est quidem. Et nulla a quidem. Culpa quia praesentium aut dolor molestiae expedita eaque. Occaecati veniam est expedita suscipit aperiam vitae. Ipsam consequuntur commodi sit repellat. Et impedit voluptatem .',
            ],
         },
      },
   }
}
