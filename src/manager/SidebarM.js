import React from 'react'
import { Link } from 'react-router-dom'

function SidebarM() {

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item ">
            <Link className="nav-link" to="../MainManager">
              <i className="icon-grid menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link " data-toggle="collapse" data-target="#transactions"  aria-expanded="false" aria-controls="transactions">
              <i className="icon-bar-graph menu-icon"></i>
              <span className="menu-title">Transactions</span>
              <i className="menu-arrow"></i>
            </Link>
            <div className="collapse" id="transactions">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to="./AddTransactionM"> Add Transactions </Link></li>
                <li className="nav-item"> <Link className="nav-link" to="./ViewTransactionM"> View Reports </Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item" >
            <Link className="nav-link" data-toggle="collapse" data-target="#advance"  aria-expanded="false" aria-controls="advance">
              <i className="icon-layout menu-icon"></i>
              <span className="menu-title">Advance</span>
              <i className="menu-arrow"></i>
            </Link>
            <div className="collapse" id="advance">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to="./AddAdvanceM">Add advance</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="./ViewAdvanceM">View Reports</Link></li>
              </ul>
            </div>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" data-toggle="collapse" data-target="#leave"  aria-expanded="false" aria-controls="leave">
              <i className="icon-grid-2 menu-icon"></i>
              <span className="menu-title">Leave</span>
              <i className="menu-arrow"></i>
            </Link>
            <div className="collapse" id="leave">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to="./AddLeaveM">Add Leave</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="./LeaveReportM">Leave Reports</Link></li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link"  to="./SalaryM" >
              <i className="icon-columns menu-icon"></i>
              <span className="menu-title">Salary</span>
            </Link>
            
          </li>
        </ul>
      </nav>
  )
}

export default SidebarM
