import React from 'react'

function AddEmployee() {
  return (
    <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title" style={{marginLeft: "350px"}}>Add Employee:</h4>
                <br/>
                <form className="form-sample">
                  {/* <!-- <p className="card-description">
                    Personal info
                  </p> --> */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Employee ID</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Name</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Date of Birth</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Gender</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Contact No.</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Branch</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>B1-Barwani Male Salon</option>
                            <option>B2-Barwani Female Salon</option>
                            <option>B3-Sendhwa Salon</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Date of Joining</label>
                        <div className="col-sm-9">
                          <input type="date" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Designation</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>Manager</option>
                            <option>Worker</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Salary</label>
                        <div className="col-sm-9">
                          <input type="number" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Description</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{marginLeft: "320px"}}>
                    <button type="submit" className="btn btn-primary mr-2 mx-3" >Submit</button>
                    <button className="btn btn-light" >Reset</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
  )
}

export default AddEmployee
