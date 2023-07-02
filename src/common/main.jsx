import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Routing from './Routing.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import AuthProvider from '../auth/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <AuthProvider>
      <Routing/>
    </AuthProvider>
    <Footer/>
  </React.StrictMode>,
)