import React from 'react'

function AddAdvanceM() {

  

  return (
    <div className="row" style={{marginLeft: "200px"}} >
            <div className="col-md-8  grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title" style={{marginLeft: "100px"}}>Employee Advance Details:</h4>
                  
                  <form className="forms-sample">
                    <div className="form-group">
                      <label htmlFor="exampleInputUsername1">Employee Name</label>
                      <div className="col-sm-15">
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
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Payment Date</label>
                      <input type="date" className="form-control" id="state" placeholder="Date"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Advance Amount</label>
                      <input type="number" className="form-control" id="city" placeholder="Amount"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputConfirmPassword1">Payment Mode</label>
                      <div className="col-sm-15">
                        <select className="form-control">
                          <option>Cash</option>
                          <option>Online</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputConfirmPassword1">Payment Reason</label>
                      <input type="Text" className="form-control" id="pincode" placeholder="Reason"/>
                    </div>
                    <button type="submit" className="btn btn-primary mr-2" style={{marginLeft: "130px"}} >Submit</button>
                    <button className="btn btn-light">Reset</button>
                  </form>
                </div>
              </div>
            </div>
        </div>
  )
}

export default AddAdvanceM
