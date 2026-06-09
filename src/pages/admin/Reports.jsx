import AdminSidebar from "../../components/admin/AdminSidebar";

import {
  FaFileInvoice,
  FaTruck,
  FaRupeeSign,
  FaStore,
  FaDownload,
} from "react-icons/fa";

import "./Admin.css";

const Reports = () => {
  return (
    <div className="admin-dashboard">

      <AdminSidebar />

      <div className="admin-content">

        {/* Header */}

        <div className="page-header">
          <div>
            <h1 className="page-title">
              📊 Reports Center
            </h1>

            <p className="page-subtitle">
              Generate and download business reports
            </p>
          </div>
        </div>

        {/* Stats */}

        <div className="courier-stats">

          <div className="courier-stat-card">
            <FaFileInvoice className="stat-icon blue" />
            <h4>Total Reports</h4>
            <h2>124</h2>
          </div>

          <div className="courier-stat-card">
            <FaTruck className="stat-icon green" />
            <h4>Shipment Reports</h4>
            <h2>45</h2>
          </div>

          <div className="courier-stat-card">
            <FaRupeeSign className="stat-icon orange" />
            <h4>Revenue Reports</h4>
            <h2>32</h2>
          </div>

          <div className="courier-stat-card">
            <FaStore className="stat-icon red" />
            <h4>Merchant Reports</h4>
            <h2>47</h2>
          </div>

        </div>

        {/* Report Categories */}

        <div className="courier-performance">

          <h2>Available Reports</h2>

          <div className="progress-item">
            <div className="progress-header">
              <span>Shipment Reports</span>
              <span>Available</span>
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-header">
              <span>Revenue Reports</span>
              <span>Available</span>
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-header">
              <span>Merchant Reports</span>
              <span>Available</span>
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-header">
              <span>Courier Reports</span>
              <span>Available</span>
            </div>
          </div>

        </div>

        {/* Reports Table */}

        <div className="admin-table-section">

          <h2>Recent Reports</h2>

          <table className="admin-table">

            <thead>
              <tr>
                <th>Report Name</th>
                <th>Type</th>
                <th>Date</th>
                <th>Download</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Monthly Revenue Report</td>
                <td>Revenue</td>
                <td>01 Aug 2026</td>
                <td>
                  <button className="admin-btn">
                    <FaDownload />
                  </button>
                </td>
              </tr>

              <tr>
                <td>Courier Performance</td>
                <td>Courier</td>
                <td>03 Aug 2026</td>
                <td>
                  <button className="admin-btn">
                    <FaDownload />
                  </button>
                </td>
              </tr>

              <tr>
                <td>Merchant Activity</td>
                <td>Merchant</td>
                <td>05 Aug 2026</td>
                <td>
                  <button className="admin-btn">
                    <FaDownload />
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

export default Reports;