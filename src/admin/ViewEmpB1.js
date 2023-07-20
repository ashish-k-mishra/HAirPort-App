import React from 'react'

function ViewEmpB1() {
  return (
    <div className="row">
            

          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title" style={{marginLeft: "330px"}}>B1-Barwani Male Salon</h4>
                <h4 className="card-title" style={{marginLeft: "350px"}}> Employee Details</h4>
                <hr/>
                <div className="table-responsive pt-3">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>
                          Employee ID
                        </th>
                        <th>
                          Branch
                        </th>
                        <th>
                          Name
                        </th>
                        <th>
                          Gender
                        </th>
                        <th>
                          DOB
                        </th>
                        <th>
                          Contact No.
                        </th>
                        <th>
                          Date of Joining
                        </th>
                        <th>
                          Salary (in ₹)
                        </th>
                        <th>
                          Status
                        </th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          01HPM
                        </td>
                        <td>
                          Barwani
                        </td>
                        <td>
                          Naeem Kasar
                        </td>
                        <td>
                          Male
                        </td>
                        <td>
                          24/12/1994
                        </td>
                        <td>
                          9988776655
                        </td>
                        <td>
                          12/02/2023
                        </td>
                        <td>
                          20000
                        </td>
                        <td>
                          Active
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
                          01HPE
                        </td>
                        <td>
                          Barwani
                        </td>
                        <td>
                          Faheem Mansuri
                        </td>
                        <td>
                          Male
                        </td>
                        <td>
                          02/12/1996
                        </td>
                        <td>
                          9966441234
                        </td>
                        <td>
                          15/02/2023
                        </td>
                        <td>
                          15000
                        </td>
                        <td>
                          Active
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
                          01HPE
                        </td>
                        <td>
                          Barwani
                        </td>
                        <td>
                          Imran Sheikh
                        </td>
                        <td>
                          Male
                        </td>
                        <td>
                          09/12/1996
                        </td>
                        <td>
                          8987654312
                        </td>
                        <td>
                          01/03/2023
                        </td>
                        <td>
                          15000
                        </td>
                        <td>
                          Active
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
                          01HPE
                        </td>
                        <td>
                          Barwani
                        </td>
                        <td>
                          Faheem Mansuri
                        </td>
                        <td>
                          Male
                        </td>
                        <td>
                          10/12/1992
                        </td>
                        <td>
                          9867453671
                        </td>
                        <td>
                          12/02/2023
                        </td>
                        <td>
                          15000
                        </td>
                        <td>
                          Active
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
    </div>
  )
}

export default ViewEmpB1
