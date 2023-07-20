import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ViewAdvanceM() {
  return (
    <>
    <div className="row">
            <div className="col-12 grid-margin stretch-card">
              <div className="card">
                <div className="row">
                  <div className="col-md-3">
                    <div className="card-body">
                      <label style={{color: "black", marginLeft: "15px"}}>From Date</label>
                        <div className="col-sm-12">
                          <input type="date" className="form-control" />
                        </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card-body">
                      <label style={{color: "black", marginLeft: "15px"}}>To Date</label>
                        <div className="col-sm-12">
                          <input type="date" className="form-control" />
                        </div>
                    </div>
                  </div>
                  <div className="col-md-3" >
                    <div className="form-group row" style={{marginTop: "15px"}}>
                      <label  style={{color: "black", marginLeft: "15px", fontSize: "15px"}}>Select Employee</label>
                      <div className="col-sm-12">
                        <select className="form-control">
                          <option>Afzal Maksudi</option>
                          <option>Faheem Mansuri</option>
                          <option>Mohit Kashyap</option>
                          <option>Irfaan Sheikh</option>
                          <option>Imran Sheikh</option>
                          <option>Danish Salmani</option>
                          <option>Samar Saifi</option>
                        </select>
                      </div>
                    </div>
                    </div>
                  <div className="col-md-3">
                    <div className="card-body" style={{marginTop: "18px"}}>
                      <button type="button" className="btn btn-info btn-rounded btn-fw">
                      <Link style={{color: "white"}} to="./AdvanceDataM">View Report</Link></button>
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

export default ViewAdvanceM
