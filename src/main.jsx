import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Departament from './components/Departament'
import Reviews from './components/Reviews'
import Admin from './components/Admin'
import Customers from './components/Customers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Navbar/>
    <main>
      <div className="container">
        <Departament/>
        <div className="main-content">
          <Admin/>
          <Reviews/>
          <Customers/>
        </div>
      </div>
    </main>
  </React.StrictMode>,
)
