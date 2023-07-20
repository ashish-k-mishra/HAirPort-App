import React from 'react'

function AddIncentiveRules() {
  return (
    <div className="col-md-6 grid-margin stretch-card" style={{marginLeft: "200px"}}>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title" style={{marginLeft: "120px"}}>Add Incentive Rules</h4>
                <form className="forms-sample">
                  <div className="form-group row">
                    <label for="exampleInputUsername2" className="col-sm-4 col-form-label" style={{marginLeft: "25px"}}>Rule Number</label>
                    <div className="col-sm-6">
                      <input type="number" className="form-control" id="exampleInputUsername2" placeholder="Rule Number"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="exampleInputUsername2" className="col-sm-4 col-form-label" style={{marginLeft: "25px"}}>From Amount</label>
                    <div className="col-sm-6">
                      <input type="number" className="form-control" id="exampleInputUsername2" placeholder="From Amount"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="exampleInputUsername2" className="col-sm-4 col-form-label" style={{marginLeft: "25px"}}>To Amount</label>
                    <div className="col-sm-6">
                      <input type="number" className="form-control" id="exampleInputUsername2" placeholder="To Amount"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="exampleInputUsername2" className="col-sm-4 col-form-label" style={{marginLeft: "25px"}}>Percentage</label>
                    <div className="col-sm-6">
                      <input type="number" className="form-control" id="exampleInputUsername2" placeholder="Percentage"/>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mr-2" style={{marginLeft: "150px"}}>Submit</button>
                </form>
              </div>
            </div>
          </div>
  )
}

export default AddIncentiveRules
