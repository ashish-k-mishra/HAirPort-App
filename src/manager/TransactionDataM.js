import React from "react";
import { Link } from "react-router-dom";

function TransactionDataM() {
  return (
    <div className="col-lg-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title" style={{ marginLeft: "300px" }}>
            Employee - 03HPA Afzal Maksudi
          </h4>
          <hr />
          <div className="table-responsive pt-3">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th></th>
                  <th>Date</th>
                  <th>Cash Amount (in ₹)</th>
                  <th>Online Amount (in ₹)</th>
                  <th>Total (in ₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link to="./TansactionDataDatewiseM">
                      <button
                        type="button"
                        className="btn btn-outline-info btn-rounded btn-icon"
                      >
                        <i className="ti-stats-up text-success"></i>
                      </button>
                    </Link>
                  </td>
                  <td>01/03/2023</td>
                  <td>1120</td>
                  <td>100</td>
                  <td>1220</td>
                </tr>
                <tr>
                  <td>
                  <Link to="#">
                      <button
                        type="button"
                        className="btn btn-outline-info btn-rounded btn-icon"
                      >
                        <i className="ti-stats-up text-success"></i>
                      </button>
                    </Link>
                  </td>
                  <td>02/03/2023</td>
                  <td>1120</td>
                  <td>100</td>
                  <td>1220</td>
                </tr>
                <tr>
                  <td>
                  <Link to="#">
                      <button
                        type="button"
                        className="btn btn-outline-info btn-rounded btn-icon"
                      >
                        <i className="ti-stats-up text-success"></i>
                      </button>
                    </Link>
                  </td>
                  <td>03/03/2023</td>
                  <td>1120</td>
                  <td>100</td>
                  <td>1220</td>
                </tr>
                <tr>
                  <td>
                  <Link to="#">
                      <button
                        type="button"
                        className="btn btn-outline-info btn-rounded btn-icon"
                      >
                        <i className="ti-stats-up text-success"></i>
                      </button>
                    </Link>
                  </td>
                  <td>04/03/2023</td>
                  <td>1120</td>
                  <td>100</td>
                  <td>1220</td>
                </tr>
                <tr>
                  <td>
                  <Link to="#">
                      <button
                        type="button"
                        className="btn btn-outline-info btn-rounded btn-icon"
                      >
                        <i className="ti-stats-up text-success"></i>
                      </button>
                    </Link>
                  </td>
                  <td>05/03/2023</td>
                  <td>1120</td>
                  <td>100</td>
                  <td>1220</td>
                </tr>
                <tr>
                  <td>
                  <Link to="#">
                      <button
                        type="button"
                        className="btn btn-outline-info btn-rounded btn-icon"
                      >
                        <i className="ti-stats-up text-success"></i>
                      </button>
                    </Link>
                  </td>
                  <td>06/03/2023</td>
                  <td>1120</td>
                  <td>100</td>
                  <td>1220</td>
                </tr>
                <tr>
                  <td>
                  <Link to="#">
                      <button
                        type="button"
                        className="btn btn-outline-info btn-rounded btn-icon"
                      >
                        <i className="ti-stats-up text-success"></i>
                      </button>
                    </Link>
                  </td>
                  <td>07/03/2023</td>
                  <td>1120</td>
                  <td>100</td>
                  <td>1220</td>
                </tr>
                <tr>
                  <td>
                  <Link to="#">
                      <button
                        type="button"
                        className="btn btn-outline-info btn-rounded btn-icon"
                      >
                        <i className="ti-stats-up text-success"></i>
                      </button>
                    </Link>
                  </td>
                  <td>08/03/2023</td>
                  <td>1120</td>
                  <td>100</td>
                  <td>1220</td>
                </tr>
                <tr>
                  <td>
                  <Link to="#">
                      <button
                        type="button"
                        className="btn btn-outline-info btn-rounded btn-icon"
                      >
                        <i className="ti-stats-up text-success"></i>
                      </button>
                    </Link>
                  </td>
                  <td>09/03/2023</td>
                  <td>1120</td>
                  <td>100</td>
                  <td>1220</td>
                </tr>
                <tr>
                  <td>
                  <Link to="#">
                      <button
                        type="button"
                        className="btn btn-outline-info btn-rounded btn-icon"
                      >
                        <i className="ti-stats-up text-success"></i>
                      </button>
                    </Link>
                  </td>
                  <td>10/03/2023</td>
                  <td>1120</td>
                  <td>100</td>
                  <td>1220</td>
                </tr>
              </tbody>
              <caption
                style={{
                  color: "green",
                  fontWeight: "bold",
                  marginLeft: "140px",
                  marginTop: "20px",
                }}
              >
                Total Cash Amount = ₹18700
              </caption>
              <caption
                style={{
                  color: "green",
                  fontWeight: "bold",
                  marginLeft: "140px",
                  marginTop: "20px",
                }}
              >
                Total Online Amount = ₹16800
              </caption>
              <caption
                style={{
                  color: "green",
                  fontWeight: "bold",
                  marginLeft: "140px",
                  marginTop: "20px",
                }}
              >
                Total Amount (Cash + Online) = ₹34800
              </caption>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionDataM;
