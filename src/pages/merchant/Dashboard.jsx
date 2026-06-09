import Sidebar from "../../components/Sidebar";

import {
  FaBox,
  FaCheckCircle,
  FaTruck,
  FaClock,
  FaTimesCircle,
  FaWallet,
} from "react-icons/fa";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        {/* Header */}

        <div className="dashboard-header">

          <div>
            <h1>Welcome Back, Arjun 👋</h1>

            <p>
              Manage shipments, orders and wallet activity.
            </p>
          </div>

          <button className="create-btn">
            + Create Shipment
          </button>

        </div>

        {/* Stats */}

        <div className="stats-grid">

          <div className="stats-card">
            <FaBox className="stats-icon" />
            <h4>Total Orders</h4>
            <h2>1250</h2>
          </div>

          <div className="stats-card">
            <FaCheckCircle className="stats-icon green" />
            <h4>Delivered</h4>
            <h2>980</h2>
          </div>

          <div className="stats-card">
            <FaTruck className="stats-icon blue" />
            <h4>In Transit</h4>
            <h2>180</h2>
          </div>

          <div className="stats-card">
            <FaClock className="stats-icon orange" />
            <h4>Pending</h4>
            <h2>65</h2>
          </div>

          <div className="stats-card">
            <FaTimesCircle className="stats-icon red" />
            <h4>Cancelled</h4>
            <h2>25</h2>
          </div>

          <div className="stats-card">
            <FaWallet className="stats-icon" />
            <h4>Wallet Balance</h4>
            <h2>₹25,400</h2>
          </div>

        </div>

        {/* Middle Section */}

        <div className="dashboard-row">

          <div className="dashboard-card">

            <h2>Courier Performance</h2>

            <div className="performance-item">
              <span>DTDC</span>
              <span>98%</span>
            </div>

            <div className="progress">
              <div className="progress-fill" style={{width:"98%"}}></div>
            </div>

            <div className="performance-item">
              <span>Delhivery</span>
              <span>96%</span>
            </div>

            <div className="progress">
              <div className="progress-fill" style={{width:"96%"}}></div>
            </div>

            <div className="performance-item">
              <span>XpressBees</span>
              <span>95%</span>
            </div>

            <div className="progress">
              <div className="progress-fill" style={{width:"95%"}}></div>
            </div>

          </div>

          <div className="dashboard-card">

            <h2>Wallet Summary</h2>

            <div className="wallet-box">
              <h3>Current Balance</h3>
              <h1>₹25,400</h1>

              <button className="wallet-btn">
                Add Money
              </button>
            </div>

          </div>

        </div>

        {/* Recent Shipments */}

        <div className="table-section">

          <h2>Recent Shipments</h2>

          <table className="shipment-table">

            <thead>
              <tr>
                <th>AWB</th>
                <th>Courier</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>AWB12345</td>
                <td>DTDC</td>
                <td className="delivered">Delivered</td>
                <td>08-06-2026</td>
              </tr>

              <tr>
                <td>AWB67890</td>
                <td>Delhivery</td>
                <td className="transit">In Transit</td>
                <td>08-06-2026</td>
              </tr>

              <tr>
                <td>AWB11111</td>
                <td>Blue Dart</td>
                <td className="pending">Pending</td>
                <td>08-06-2026</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;