import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function LeaveReport() {
  return (
    <>
    <div className="row">
            <div className="col-12 grid-margin stretch-card">
              <div className="card">
                <div className="row">
                  <div className="col-md-3" >
                    <div style={{marginTop: "20px"}}>
                      <label  style={{color: "black", marginLeft: "20px", fontSize: "15px"}}>Select Branch</label>
                      <div className="col-sm-12">
                        <select className="form-control">
                          <option>B1-Barwani Male Salon</option>
                          <option>B2-Barwani Female Salon</option>
                          <option>B3-Sedhwa Salon</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3" >
                    <div style={{marginTop: "20px"}}>
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
                    <div style={{marginTop: "20px"}}>
                      <label style={{color: "black", marginLeft: "15px"}}>From Date</label>
                        <div className="col-sm-12">
                          <input type="date" className="form-control" />
                        </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div style={{marginTop: "20px"}}>
                      <label style={{color: "black", marginLeft: "15px"}}>To Date</label>
                        <div className="col-sm-12">
                          <input type="date" className="form-control" />
                        </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="card-body" style={{marginLeft: "750px"}}>
                      <button type="button" className="btn btn-info btn-rounded btn-fw">
                      <Link style={{color: "white"}} to="./LeaveReportData">View Report</Link></button>
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

export default LeaveReport
