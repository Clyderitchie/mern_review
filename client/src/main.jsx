import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/qrcode/:qrCodeId',
        element: <QRCode />
      },
      {
        path: '/signup',
        element: <SignUp />
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter}/>
  </React.StrictMode>,
)