import 'styles/Journal.css'

import Log from './journal/components/Log'

import { useLoaderData } from 'react-router-dom'

export default function Journal(params) {
   const logs = useLoaderData()

   return (
      <div className='Journal centralizer'>
         <div className='logs'>
            {logs.map((log, logId) => {
               return (
                  <Log
                     date={log.date}
                     title={log.title}
                     titleImage={log.titleImage}
                     titleImageAlt={log.titleImageAlt}
                     key={logId}
                  />
               )
            })}
         </div>
      </div>
   )
}

Journal.getLayout = function (page) {
   return <BottomNavigationLayout>{page}</BottomNavigationLayout>
}
