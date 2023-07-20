import React from 'react'

function AddBranch() {
  return (
    <div className="row" style={{marginLeft: "200px"}}>
    <div className="col-md-7  grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title" style={{marginLeft: "140px"}}>Add Branch</h4>
          
          <form className="forms-sample">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Branch ID</label>
              <input type="text" className="form-control" id="state" placeholder="Branch ID"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Branch Name</label>
              <input type="text" className="form-control" id="state" placeholder="Branch Name"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Address</label>
              <input type="text" className="form-control" id="state" placeholder="Address"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputUsername1">Manager Name</label>
              <div className="col-sm-15">
                <select className="form-control">
                  <option>Afzal Maksudi</option>
                  <option>Faheem Mansuri</option>
                  <option>Mohit Kashyap</option>
                  <option>Irfaan Sheikh</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Register Date</label>
              <input type="date" className="form-control" id="state" placeholder="Date"/>
            </div>
            <button type="submit" className="btn btn-primary mr-2" style={{marginLeft: "110px"}} >Submit</button>
            <button className="btn btn-light">Reset</button>
          </form>
        </div>
      </div>
    </div> 
    </div> 
      
  )
}

export default AddBranch
