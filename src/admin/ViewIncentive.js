import React from 'react'

function ViewIncentive() {
  return (
    <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title" style={{marginLeft: "350px"}}>Employee's Incentive</h4>
                
                <div className="table-responsive pt-3">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>
                          Incentive Rule
                        </th>
                        <th>
                          Employee ID
                        </th>
                        <th>
                          Employee Name
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
                          01HPA
                        </td>
                        <td>
                          Naeem Kasar
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
                          Rule1
                        </td>
                        <td>
                          02HPA
                        </td>
                        <td>
                          Sameer Salmani
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
                          03HPA
                        </td>
                        <td>
                          Faheem Mansuri
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
                          Rule1
                        </td>
                        <td>
                          01HPA
                        </td>
                        <td>
                          Danish Salmani
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
                          03HPA
                        </td>
                        <td>
                          Faheem Mansuri
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
                          02HPA
                        </td>
                        <td>
                          Aakash Bandewar
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
                          Rule1
                        </td>
                        <td>
                          04HPA
                        </td>
                        <td>
                          Salman Malik
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

export default ViewIncentive
