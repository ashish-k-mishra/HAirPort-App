import React from 'react'

function AddIncentive() {
  return (
    
    <div className="row" style={{marginLeft: "200px"}}>
            <div className="col-md-8  grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title" style={{margineft: "120px"}}>Add Incentive Employee:</h4>
                  
                  <form className="forms-sample">
                    <div className="form-group">
                      <label htmlFor="exampleInputUsername1">Incentive Rules</label>
                      <div className="col-sm-15">
                        <select className="form-control">
                          <option>Rule1</option>
                          <option>Rule2</option>
                          <option>Rule3</option>
                          <option>Rule4</option>
                          <option>Rule5</option>
                          <option>Rule6</option>
                          <option>Rule7</option>
                        </select>
                      </div>
                    </div>
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
                    <button type="submit" className="btn btn-primary mr-2" style={{marginLeft: "160px"}} >Submit</button>
                  </form>
                </div>
              </div>
            </div> 
        </div> 
        
  )
}

export default AddIncentive
