import React from 'react'
import Footer from './Footer'
import Sidebar from './Sidebar'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

function MainAdmin() {
  return (
    <div className="container-scroller">

      <NavBar/>

    <div className="container-fluid page-body-wrapper">
      
      <Sidebar/>

      <div className="main-panel">
        <div className="content-wrapper">
        <br/>
          
          <Outlet/>

        </div>
      </div>
    </div>

        <Footer/>
  </div>
    
    )
}

export default MainAdmin
