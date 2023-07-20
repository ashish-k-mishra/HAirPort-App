import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/MainAdmin">
              <i className="icon-grid menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" data-toggle="collapse" data-target="#branch" aria-expanded="false" aria-controls="branch">
              <i className="icon-contract menu-icon"></i>
              <span className="menu-title">Branch</span>
              <i className="menu-arrow"></i>
            </Link>
            <div className="collapse" id="branch">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to="./AddBranch"> Add Branch </Link></li>
                <li className="nav-item"> <Link className="nav-link" to="./ViewBranch"> View Branch </Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" data-toggle="collapse" data-target="#employee" aria-expanded="false" aria-controls="employee">
              <i className="icon-grid-2 menu-icon"></i>
              <span className="menu-title">Employee</span>
              <i className="menu-arrow"></i>
            </Link>
            <div className="collapse" id="employee">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to="./AddEmployee"> Add Employee </Link></li>
                <li className="nav-item"> <Link className="nav-link" to="./ViewEmployee"> View Employee </Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" data-toggle="collapse" data-target="#transactions" aria-expanded="false" aria-controls="transactions">
              <i className="icon-bar-graph menu-icon"></i>
              <span className="menu-title">Transactions</span>
              <i className="menu-arrow"></i>
            </Link>
            <div className="collapse" id="transactions">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to="./TransactionEmp"> Employee Reports </Link></li>
                <li className="nav-item"> <Link className="nav-link" to="./TransactionBranch"> Branch Reports </Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" data-toggle="collapse" data-target="#advance" aria-expanded="false" aria-controls="advance">
              <i className="icon-layout menu-icon"></i>
              <span className="menu-title">Advance</span>
              <i className="menu-arrow"></i>
            </Link>
            <div className="collapse" id="advance">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to="./ViewAdvance">View Reports</Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" data-toggle="collapse" data-target="#leave" aria-expanded="false" aria-controls="leave">
              <i className="icon-grid-2 menu-icon"></i>
              <span className="menu-title">Leave</span>
              <i className="menu-arrow"></i>
            </Link>
            <div className="collapse" id="leave">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to="./LeaveReport">Leave Reports</Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" data-toggle="collapse" data-target="#incentive" aria-expanded="false" aria-controls="incentive">
              <i className="icon-columns menu-icon"></i>
              <span className="menu-title">Incentive</span>
              <i className="menu-arrow"></i>
            </Link>
            <div className="collapse" id="incentive">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to="./AddIncentive">Add Incentive</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="./ViewIncentive">View Incentive</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="./AddIncentiveRules">Add Rules</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="./ViewIncentiveRules">View Rules</Link></li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link"  to="./Salary">
              <i className="icon-columns menu-icon"></i>
              <span className="menu-title">Salary</span>
            </Link>
          </li>

        </ul>
      </nav>
  )
}

export default Sidebar
