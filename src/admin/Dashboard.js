import React from 'react'

function Dashboard() {
  return (
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card tale-bg">
                <div className="card-people mt-auto">
                  <img src="images/index_bg.jpg" alt="people"/>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin transparent">
              <div className="row">
                <div className="col-md-6 mb-4 stretch-card transparent">
                  <div className="card card-tale">
                    <div className="card-body">
                      <p className="mb-4">Staff in leave</p>
                      <p className="fs-30 mb-2">3</p>
                      <p>Yesterday: 1</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4 stretch-card transparent">
                  <div className="card card-dark-blue">
                    <div className="card-body">
                      <p className="mb-4">Today’s Customer Visit</p>
                      <p className="fs-30 mb-2">330</p>
                      <p>Yesterday: 310</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                  <div className="card card-light-blue">
                    <div className="card-body">
                      <p className="mb-4">Today’s Revenue</p>
                      <p className="fs-30 mb-2">₹ 50500</p>
                      <p>Yesterday: ₹ 50000</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 stretch-card transparent">
                  <div className="card card-light-danger">
                    <div className="card-body">
                      <p className="mb-4">Total Customers Visit</p>
                      <p className="fs-28 mb-2">March: 20030</p>
                      <p>Last month: 20200</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Dashboard
