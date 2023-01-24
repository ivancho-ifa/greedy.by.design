import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
   const error = useRouteError()
   console.error(error)

   return (
      <div>
         <main>
            <article>
               <header>
                  <h1>Oops!</h1>
                  <p>Sorry, an unexpected error has occurred.</p>
               </header>
               <section>
                  <p>{error.statusText || error.message}</p>
               </section>
            </article>
         </main>
      </div>
   )
}
