import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.Fragment>
)
