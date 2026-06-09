import AdminSidebar from "../../components/admin/AdminSidebar";

import {
  FaRupeeSign,
  FaChartLine,
  FaMoneyBillWave,
  FaWallet,
} from "react-icons/fa";

import "./Admin.css";

const Revenue = () => {
  return (
    <div className="admin-dashboard">

      <AdminSidebar />

      <div className="admin-content">

        {/* Header */}

        <div className="page-header">
          <div>
            <h1 className="page-title">
              💰 Revenue Dashboard
            </h1>

            <p className="page-subtitle">
              Monitor revenue, commissions and financial performance
            </p>
          </div>
        </div>

        {/* Stats */}

        <div className="courier-stats">

          <div className="courier-stat-card">
            <FaRupeeSign className="stat-icon green" />
            <h4>Total Revenue</h4>
            <h2>₹12.5L</h2>
          </div>

          <div className="courier-stat-card">
            <FaChartLine className="stat-icon blue" />
            <h4>Commission Earned</h4>
            <h2>₹2.1L</h2>
          </div>

          <div className="courier-stat-card">
            <FaMoneyBillWave className="stat-icon orange" />
            <h4>COD Revenue</h4>
            <h2>₹4.3L</h2>
          </div>

          <div className="courier-stat-card">
            <FaWallet className="stat-icon red" />
            <h4>Pending Settlement</h4>
            <h2>₹1.2L</h2>
          </div>

        </div>

        {/* Revenue Performance */}

        <div className="courier-performance">

          <h2>Revenue Performance</h2>

          <div className="progress-item">
            <div className="progress-header">
              <span>Monthly Revenue Target</span>
              <span>82%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "82%" }}
              />
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-header">
              <span>Commission Collection</span>
              <span>94%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "94%" }}
              />
            </div>
          </div>

        </div>

        {/* Revenue Table */}

        <div className="admin-table-section">

          <h2>Top Revenue Merchants</h2>

          <table className="admin-table">

            <thead>
              <tr>
                <th>Merchant</th>
                <th>Orders</th>
                <th>Revenue</th>
                <th>Commission</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>ABC Logistics</td>
                <td>1250</td>
                <td>₹2.5L</td>
                <td>₹25,000</td>
              </tr>

              <tr>
                <td>FastShip Pvt Ltd</td>
                <td>980</td>
                <td>₹1.8L</td>
                <td>₹18,000</td>
              </tr>

              <tr>
                <td>Express Cargo</td>
                <td>850</td>
                <td>₹1.3L</td>
                <td>₹13,000</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Revenue;