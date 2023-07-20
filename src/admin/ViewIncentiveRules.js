import React from 'react'

function ViewIncentiveRules() {
  return (
    <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title" style={{marginLeft: "350px"}}>Incentive Rules:</h4>
                
                <div className="table-responsive pt-3">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>
                          Rule No.
                        </th>
                        <th>
                          From Amount (in ₹)
                        </th>
                        <th>
                          To Amount (in ₹)
                        </th>
                        <th>
                          Percentage
                        </th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Rule1
                        </td>
                        <td>
                          7000
                        </td>
                        <td>
                          9999
                        </td>
                        <td>
                          5%
                        </td>
                        <td>
                          <button type="button" className="btn btn-info btn-sm">Edit</button>
                        </td>
                        <td>
                          <button type="button" className="btn btn-primary btn-sm">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Rule2
                        </td>
                        <td>
                          9999
                        </td>
                        <td>
                          14999
                        </td>
                        <td>
                          8%
                        </td>
                        <td>
                          <button type="button" className="btn btn-info btn-sm">Edit</button>
                        </td>
                        <td>
                          <button type="button" className="btn btn-primary btn-sm">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Rule3
                        </td>
                        <td>
                          14999
                        </td>
                        <td>
                          18000
                        </td>
                        <td>
                          10%
                        </td>
                        <td>
                          <button type="button" className="btn btn-info btn-sm">Edit</button>
                        </td>
                        <td>
                          <button type="button" className="btn btn-primary btn-sm">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Rule4
                        </td>
                        <td>
                          18000
                        </td>
                        <td>
                          20000
                        </td>
                        <td>
                          12%
                        </td>
                        <td>
                          <button type="button" className="btn btn-info btn-sm">Edit</button>
                        </td>
                        <td>
                          <button type="button" className="btn btn-primary btn-sm">Delete</button>
                        </td>
                      </tr>
                     
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ViewIncentiveRules
