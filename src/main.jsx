import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import ErrorPage from './ErrorPage'
import MainPage from './MainPage'
import About from './About'
import Books from './Books'

const router = createBrowserRouter([
  {
    path :'/',
    element : <Home />,
    errorElement: <ErrorPage />,
    children:[
      {
        path :'/',
        element: <MainPage />,
        
      },
      {
        path :'about',
        element:<About/>
      }
      ,
      {
        path :'books',
        element: <Books />,
        loader :()=>fetch(`https://api.itbook.store/1.0/new`)
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
