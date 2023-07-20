import React from 'react'

function AddTransactionM() {
  return (
    <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title" style={{marginLeft: "300px"}}>Customer Transaction Details:</h4>
                <br/>
                <form className="form-sample">
                  {/* <!-- <p className="card-description">
                    Personal info
                  </p> --> */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Customer Name</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Contact No.</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Employee Name</label>
                        <div className="col-sm-9">
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
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Service Type</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>Hair-cutting</option>
                            <option>Beard-trreaming</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* <!-- <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Date of Birth</label>
                        <div className="col-sm-9">
                          <input className="form-control" placeholder="dd/mm/yyyy"/>
                        </div>
                      </div>
                    </div> --> */}
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Amount</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Payment Mode</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>Cash</option>
                            <option>Online</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Transaction Date</label>
                        <div className="col-sm-9">
                          <input type="date" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Transaction Time</label>
                        <div className="col-sm-9">
                          <input type="time" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Transaction ID</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
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

export default AddTransactionM
