import React from 'react'
import ReactDOM from 'react-dom/client'
import rauter from './rauter'
import { RouterProvider } from 'react-router-dom'
import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rauter}/>
  </React.StrictMode>,
)
