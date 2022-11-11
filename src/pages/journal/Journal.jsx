import LogComponent from './components/Log'

const logs = [
   {
      date: new Date('Thu Nov 10 2022 07:19:24 GMT+0200 (Eastern European Standard Time)'),
      title: 'Maxime veritatis est voluptatibus vero aut qui ut.',
      titleImage: 'http://placeimg.com/640/480',
   },
   {
      date: new Date('Thu Nov 10 2022 07:19:24 GMT+0200 (Eastern European Standard Time)'),
      title: 'Maxime veritatis est voluptatibus vero aut qui ut.',
      titleImage: 'http://placeimg.com/640/480',
   },
   {
      date: new Date('Thu Nov 10 2022 07:19:24 GMT+0200 (Eastern European Standard Time)'),
      title: 'Maxime veritatis est voluptatibus vero aut qui ut.',
      titleImage: 'http://placeimg.com/640/480',
   },
   {
      date: new Date('Thu Nov 10 2022 07:19:24 GMT+0200 (Eastern European Standard Time)'),
      title: 'Maxime veritatis est voluptatibus vero aut qui ut.',
      titleImage: 'http://placeimg.com/640/480',
   },
   {
      date: new Date('Thu Nov 10 2022 07:19:24 GMT+0200 (Eastern European Standard Time)'),
      title: 'Maxime veritatis est voluptatibus vero aut qui ut.',
      titleImage: 'http://placeimg.com/640/480',
   },
]

export default function Journal(params) {
   return (
      <div className='Journal'>
         {logs.map((log) => {
            return (
               <LogComponent
                  date={log.date}
                  title={log.title}
               />
            )
         })}
      </div>
   )
}
