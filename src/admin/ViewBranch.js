import React from "react";

function ViewBranch() {
  return (
    <div className="col-lg-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title" style={{ marginLeft: "350px" }}>
            Branch Details:
          </h4>
          <hr />
          <div className="table-responsive pt-3">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Branch ID</th>
                  <th>Branch Name</th>
                  <th>Address</th>
                  <th>Manager Name</th>
                  <th>Register Date</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>B1</td>
                  <td>Barwani Male Salon</td>
                  <td>Shop No-23, Kalka Chowk, Brawani</td>
                  <td>Naeem Kasar</td>
                  <td>20/02/2022</td>
                  <td>
                    <button type="button" className="btn btn-info btn-sm">
                      Edit
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-primary btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>B2</td>
                  <td>Barwani Female Salon</td>
                  <td>Shop No-05, Mundi, Brawani</td>
                  <td>Danish Salmani</td>
                  <td>10/06/2022</td>
                  <td>
                    <button type="button" className="btn btn-info btn-sm">
                      Edit
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-primary btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>B3</td>
                  <td>Sendhwa Salon</td>
                  <td>Shop No-10, Malviya Chowk, Sendhwa</td>
                  <td>Mohsin Salmani</td>
                  <td>24/09/2022</td>
                  <td>
                    <button type="button" className="btn btn-info btn-sm">
                      Edit
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-primary btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewBranch;
