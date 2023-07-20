import React from 'react'
import SidebarM from './SidebarM'
import NavbarM from './NavbarM'
import FooterM from './FooterM'
import { Outlet } from 'react-router-dom'

function MainManager() {
  return (
    <div className="container-scroller">

      <NavbarM/>

    <div className="container-fluid page-body-wrapper">
      
      <SidebarM/>

      <div className="main-panel">
        <div className="content-wrapper">
        <br />
          
          <Outlet/>

        </div>
      </div>
    </div>

        <FooterM/>
  </div>
  )
}

export default MainManager
