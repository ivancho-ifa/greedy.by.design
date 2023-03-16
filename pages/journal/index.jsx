import BottomNavigationLayout from 'components/BottomNavigationLayout'
import journalStyles from 'styles/Journal.module.css'
import LogThumbnail from 'components/LogThumbnail'
import { getLogs } from 'utils/logs'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Journal({ logs }) {
   const router = useRouter()

   return (
      <div className={`${journalStyles.Journal} ${journalStyles.centralizer}`}>
         <div className={`${journalStyles.logs}`}>
            {logs.map((log, logId) => {
               return (
                  <Link href={`${router.asPath}/${log.uri}`}>
                     <LogThumbnail
                        date={log.date}
                        title={log.title}
                        titleImage={log.titleImage}
                        titleImageAlt={log.titleImageAlt}
                        key={logId}
                     />
                  </Link>
               )
            })}
         </div>
      </div>
   )
}

Journal.getLayout = function (page) {
   return <BottomNavigationLayout>{page}</BottomNavigationLayout>
}

export async function getStaticProps() {
   return {
      props: {
         logs: await getLogs()
      }
   }
}


// export async function getStaticProps() {
//    return {
//       props: {
//          logs: [
//             {
//                date: new Date('Thu Nov 10 2022 07:19:24 GMT+0200 (Eastern European Standard Time)').toJSON(),
//                title: 'Voluptas voluptatem molestiae fuga vel reprehenderit dolores.',
//                titleImage: 'http://placeimg.com/640/480/fashion',
//                titleImageAlt: 'Alias ipsam delectus non nostrum magnam nemo numquam id doloremque.',
//             },
//             {
//                date: new Date('Wed Feb 23 2022 06:45:50 GMT+0200 (Eastern European Standard Time))').toJSON(),
//                title: 'Saepe odio magnam ut.',
//                titleImage: 'http://placeimg.com/640/480/nightlife',
//                titleImageAlt: 'Natus quia aut dolores ea quis.',
//             },
//             {
//                date: new Date('Thu Apr 28 2022 03:01:31 GMT+0300 (Eastern European Summer Time)').toJSON(),
//                title: 'Quisquam veniam cupiditate.',
//                titleImage: 'http://placeimg.com/640/480/sports',
//                titleImageAlt: 'Error doloribus eligendi quod quam perferendis qui et officiis consequatur.',
//             },
//             {
//                date: new Date('Sun Jul 31 2022 09:51:30 GMT+0300 (Eastern European Summer Time)').toJSON(),
//                title: 'Repudiandae perspiciatis ducimus nam.',
//                titleImage: 'http://placeimg.com/640/480/cats',
//                titleImageAlt: 'Sapiente quibusdam quidem esse id rem vero recusandae.',
//             },
//             {
//                date: new Date('Fri Dec 03 2021 18:22:36 GMT+0200 (Eastern European Standard Time)').toJSON(),
//                title: 'Fugit provident optio nesciunt voluptas quas.',
//                titleImage: 'http://placeimg.com/640/480/transport',
//                titleImageAlt: 'Qui sed vel id et dolorem voluptas.',
//             },
//             {
//                date: new Date('Tue Aug 09 2022 12:03:41 GMT+0300 (Eastern European Summer Time)').toJSON(),
//                title: 'Perspiciatis impedit cumque quis possimus.',
//                titleImage: 'http://placeimg.com/640/480/transport',
//                titleImageAlt: 'Dolorem voluptate consectetur qui suscipit quo debitis molestiae.',
//             },
//             {
//                date: new Date('Fri May 20 2022 16:16:02 GMT+0300 (Eastern European Summer Time)').toJSON(),
//                title: 'Ducimus beatae temporibus porro aut eum corrupti dignissimos cupiditate iure.',
//                titleImage: 'http://placeimg.com/640/480/abstract',
//                titleImageAlt: 'Corporis asperiores totam.',
//             },
//             {
//                date: new Date('Thu Jun 23 2022 19:46:53 GMT+0300 (Eastern European Summer Time)').toJSON(),
//                title: 'Ea quam labore eaque vel praesentium accusantium dolorem ut.',
//                titleImage: 'http://placeimg.com/640/480/nature',
//                titleImageAlt: 'Similique perferendis fugiat occaecati qui accusantium sit iure numquam.',
//             },
//             {
//                date: new Date('Mon Mar 21 2022 06:39:21 GMT+0200 (Eastern European Standard Time)').toJSON(),
//                title: 'Id molestias doloremque omnis ratione necessitatibus sint ipsum odio nisi.',
//                titleImage: 'http://placeimg.com/640/480/food',
//                titleImageAlt: 'Occaecati qui voluptates.',
//             },
//             {
//                date: new Date('Tue Dec 07 2021 14:44:17 GMT+0200 (Eastern European Standard Time)').toJSON(),
//                title: 'Inventore quam quaerat nisi.',
//                titleImage: 'http://placeimg.com/640/480/animals',
//                titleImageAlt: 'Placeat rerum fugit soluta et cum officiis cum id quia.',
//             },
//             // {
//             //    date: new Date(''),
//             //    title: '',
//             //    titleImage: '',
//             //    titleImageAlt: '',
//             // },
//          ],
//       }, // will be passed to the page component as props
//    }
// }
