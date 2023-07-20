import React from 'react'
import { Link } from 'react-router-dom'

function FooterM() {
  return (
   
        <footer className="footer">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2023. 
            <Link to="https://www.bootstrapdash.com/" target="_blank">HairPort Salon</Link> from HairPort Pvt Ltd. All rights reserved.</span>
          </div>
        </footer>
  
      
  )
}

export default FooterM
