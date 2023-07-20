import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ViewEmployee() {
  return (
    <>
    <div className="row">
    <div className="col-12 grid-margin stretch-card">
      <div className="card">
        <div className="row">
          <div className="col-md-6" >
            <div className="form-group row" style={{marginTop: "15px", marginLeft: "100px"}}>
              <label  style={{color: "black", marginLeft: "15px", fontSize: "15px"}}>Select Branch</label>
              <div className="col-sm-12">
                <select className="form-control">
                  <option>B1 - Brawani Male Salon</option>
                  <option>B2 - Brawani Female Salon</option>
                  <option>B3 - Sendhwa Salon</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{marginLeft: "70px"}}>
            <div className="card-body" style={{marginTop: "20px"}}>
              <button type="button" className="btn btn-info btn-rounded btn-fw">
                <Link style={{color: "white"}} to="./ViewEmpB1">View Report</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Outlet/>
    </>
  )
}

export default ViewEmployee
