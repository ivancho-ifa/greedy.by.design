import Log from './components/Log'

import { useLoaderData } from "react-router-dom";

export default function Journal(params) {
   const logs = useLoaderData()

   return (
      <div className='Journal'>
         {logs.map((log, logId) => {
            return (
               <Log
                  date={log.date}
                  title={log.title}
                  key={logId}
               />
            )
         })}
      </div>
   )
}
