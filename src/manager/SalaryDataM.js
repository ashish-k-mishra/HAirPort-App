import React from 'react'

function SalaryDataM() {
  return (
    <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body" id="save_pdf">
                <h4 className="card-title" style={{marginLeft: "370px"}}>Employee Record:</h4>
                <button type="button"  className="btn btn-info btn-rounded btn-sm btn-icon-text" style={{float: "right"}}>
                  Print
                  <i className="ti-printer btn-icon-append"></i>                                                                              
                </button>
                <div  className="table-responsive pt-3">
                  <table className="table table-bordered">
                    <tbody>
                    <tr>
                      <th>Employee ID</th>
                      <td>01HPD</td>
                      <th>Employee Name</th>
                      <td>Afzal Maksudi</td>
                    </tr>
                    <tr>
                      <th>Branch Name</th>
                      <td>Hairport Male Barwani</td>
                      <th>Full Day Leaves</th>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th>Half Day Leaves</th>
                      <td>0</td>
                      <th>Tatal Leaves</th>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th>Total Working Days (No.of days in month-Total leaves+4)</th>
                      <td>34</td>
                      <th>Monthly Salary of Employee</th>
                      <td>₹ 20000</td>
                    </tr>
                    <tr>
                      <th>Employee 1 day salary (Employee salary/30 days)</th>
                      <td>₹ 667</td>
                      <th>Advance taken (in month)</th>
                      <td>₹ 0</td>
                    </tr>
                    <tr>
                      <th>Incentive calculated</th>
                      <td>₹ 0</td>
                      <th>Net Salary (day salary * total working days)</th>
                      <td>₹ 22678</td>
                    </tr>
                    <tr>
                      <th>Gross Salary (Net salary-Advance+Incentive)</th>
                      <td>₹ 22678</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> 
  )
}

export default SalaryDataM
