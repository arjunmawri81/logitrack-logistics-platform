import AdminSidebar from "../../components/admin/AdminSidebar";
import {
  FaTruck,
  FaLink,
  FaTimesCircle,
  FaChartLine,
  FaEye,
} from "react-icons/fa";

import "./Admin.css";

const Couriers = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="admin-content">

        {/* Header */}

        <div className="page-header">
          <div>
            <h1 className="page-title">
              🚚 Courier Partners
            </h1>

            <p className="page-subtitle">
              Manage courier integrations and monitor API performance
            </p>
          </div>
        </div>

        {/* Stats Cards */}

        <div className="courier-stats">

          <div className="courier-stat-card">
            <FaTruck className="stat-icon orange" />
            <h4>Total Couriers</h4>
            <h2>8</h2>
          </div>

          <div className="courier-stat-card">
            <FaLink className="stat-icon green" />
            <h4>Connected APIs</h4>
            <h2>6</h2>
          </div>

          <div className="courier-stat-card">
            <FaTimesCircle className="stat-icon red" />
            <h4>Failed APIs</h4>
            <h2>2</h2>
          </div>

          <div className="courier-stat-card">
            <FaChartLine className="stat-icon blue" />
            <h4>Success Rate</h4>
            <h2>96%</h2>
          </div>

        </div>

        {/* Performance */}

        <div className="courier-performance">

          <h2>Courier Performance</h2>

          <div className="progress-item">
            <div className="progress-header">
              <span>DTDC</span>
              <span>98%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "98%" }}
              />
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-header">
              <span>Delhivery</span>
              <span>96%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "96%" }}
              />
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-header">
              <span>Blue Dart</span>
              <span>91%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "91%" }}
              />
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-header">
              <span>XpressBees</span>
              <span>95%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "95%" }}
              />
            </div>
          </div>

        </div>

        {/* Table */}

        <div className="admin-table-section">

          <h2>Courier Partner List</h2>

          <table className="admin-table">

            <thead>
              <tr>
                <th>Courier</th>
                <th>API Status</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>
                  <div className="courier-info">
                    <div className="courier-avatar">
                      DT
                    </div>
                    DTDC
                  </div>
                </td>
                <td>Connected</td>
                <td>#1</td>
                <td>
                  <span className="active">
                    Active
                  </span>
                </td>
                <td>
                  <button className="admin-btn">
                    <FaEye />
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="courier-info">
                    <div className="courier-avatar">
                      DL
                    </div>
                    Delhivery
                  </div>
                </td>
                <td>Connected</td>
                <td>#2</td>
                <td>
                  <span className="active">
                    Active
                  </span>
                </td>
                <td>
                  <button className="admin-btn">
                    <FaEye />
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="courier-info">
                    <div className="courier-avatar">
                      BD
                    </div>
                    Blue Dart
                  </div>
                </td>
                <td>Disconnected</td>
                <td>#3</td>
                <td>
                  <span className="blocked">
                    Inactive
                  </span>
                </td>
                <td>
                  <button className="admin-btn">
                    <FaEye />
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="courier-info">
                    <div className="courier-avatar">
                      XB
                    </div>
                    XpressBees
                  </div>
                </td>
                <td>Connected</td>
                <td>#4</td>
                <td>
                  <span className="active">
                    Active
                  </span>
                </td>
                <td>
                  <button className="admin-btn">
                    <FaEye />
                  </button>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
};

export default Couriers;