import React from 'react'

function DashboardM() {
  return (
    <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card tale-bg">
                <div className="card-people mt-auto">
                  <img src="images/index_bg.jpg" alt="people"/>
                  {/* <!-- <div className="weather-info">
                    <div className="d-flex">
                      <div>
                        <h2 className="mb-0 font-weight-normal"><i className="icon-sun mr-2"></i>31<sup>C</sup></h2>
                      </div>
                      <div className="ml-2">
                        <h4 className="location font-weight-normal">Bangalore</h4>
                        <h6 className="font-weight-normal">India</h6>
                      </div>
                    </div>
                  </div> --> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin transparent">
              <div className="row">
                <div className="col-md-6 mb-4 stretch-card transparent">
                  <div className="card card-tale">
                    <div className="card-body">
                      <p className="mb-4">Staff in leave</p>
                      <p className="fs-30 mb-2">0</p>
                      <p>Yesterday: 1</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4 stretch-card transparent">
                  <div className="card card-dark-blue">
                    <div className="card-body">
                      <p className="mb-4">Today’s Customer Visit</p>
                      <p className="fs-30 mb-2">80</p>
                      <p>Yesterday: 60</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                  <div className="card card-light-blue">
                    <div className="card-body">
                      <p className="mb-4">Today’s Revenue</p>
                      <p className="fs-30 mb-2">₹ 4500</p>
                      <p>Yesterday: ₹ 5000</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 stretch-card transparent">
                  <div className="card card-light-danger">
                    <div className="card-body">
                      <p className="mb-4">Total Customers Visit</p>
                      <p className="fs-30 mb-2">March: 1030</p>
                      <p>Last month: 1200</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
  )
}

export default DashboardM
