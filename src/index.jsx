import 'the-new-css-reset/css/reset.css'

import Home from './pages/home/Home'
import Error from './pages/error/Error'
import Journal from './pages/journal/Journal'

import reportWebVitals from './reportWebVitals'

import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import logsLoader from './pages/journal/utils/logsLoader'

ReactDOM.createRoot(document.getElementById('root')).render(
   <StrictMode>
      <RouterProvider
         router={createBrowserRouter([
            {
               path: '/',
               element: <Home />,
               errorElement: <Error />,
            },
            {
               path: '/journal',
               element: <Journal />,
               loader: logsLoader,
            },
         ])}
      />
   </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
