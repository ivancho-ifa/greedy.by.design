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

function getLocale() {
   return navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language
}

function Log(params) {
   return (
      <div>
         <header>
            <p>
               <time dateTime={params.date}>{params.date.ToLocaleString()}</time>
            </p>
            <h2>{params.title}</h2>
         </header>
      </div>
   )
}

function Journal(params) {
   return (
      <div className='Journal'>
         {params.logs.forEach((log) => {
            return (
               <Log
                  date={log.date}
                  title={log.title}
               />
            )
         })}
      </div>
   )
}

export default Journal
