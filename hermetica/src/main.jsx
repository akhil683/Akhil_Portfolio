import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import './index.css'
import ClubProvider from './Context/hermetica.context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClubProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClubProvider>
  </React.StrictMode>,
)
