import 'the-new-css-reset/css/reset.css'

import Home from './pages/home/Home'
import Error from './pages/error/Error'
import Journal from './pages/journal/Journal'
import logsLoader from './pages/journal/utils/logsLoader'
import Navigation from './components/Navigation'
import Contact from './pages/contact/Contact'
import Shop from './pages/shop/Shop'
import Studio from './pages/studio/Studio'
import Projects from './pages/projects/Projects'

import reportWebVitals from './reportWebVitals'

import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
   <StrictMode>
      <RouterProvider
         router={createBrowserRouter([
            {
               path: '/',
               element: <Outlet />,
               // TODO: Improve error page
               errorElement: <Error />,
               children: [
                  {
                     index: true,
                     element: <Home />,
                  },
                  {
                     path: '/',
                     element: <Navigation />,
                     children: [
                        {
                           path: 'journal',
                           element: <Journal />,
                           loader: logsLoader,
                        },
                        {
                           path: 'contact',
                           element: <Contact />,
                        },
                        {
                           path: 'studio',
                           element: <Studio />,
                        },
                        {
                           path: 'projects',
                           element: <Projects />,
                        },
                        {
                           path: 'shop',
                           element: <Shop />,
                        },
                     ],
                  },
               ],
            },
         ])}
      />
   </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
