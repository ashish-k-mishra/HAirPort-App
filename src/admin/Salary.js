import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Salary() {
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
                    <div className="card-body">
                      <label style={{color: "black"}}>Select Month</label>
                      <div className="col-sm-15">
                        <select className="form-control">
                          <option>January</option>
                          <option>February</option>
                          <option>March</option>
                          <option>April</option>
                          <option>May</option>
                          <option>June</option>
                          <option>July</option>
                          <option>August</option>
                          <option>September</option>
                          <option>October</option>
                          <option>Nevember</option>
                          <option>December</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card-body">
                      <label style={{color: "black"}}>Select Year</label>
                      <div className="col-sm-15">
                        <select className="form-control">
                          <option>2023</option>
                          <option>2024</option>
                          <option>2025</option>
                          <option>2026</option>
                          <option>2027</option>
                          <option>2028</option>
                          <option>2029</option>
                          <option>2030</option>
                          <option>2031</option>
                          <option>2032</option>
                          <option>2033</option>
                          <option>2034</option>
                          <option>2035</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-12">
                    <div className="card-body" style={{marginLeft: "750px"}}>
                      <button type="button" className="btn btn-info btn-rounded btn-fw">
                      <Link style={{color: "white"}} to="./SalaryData">View Report</Link></button>
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

export default Salary
