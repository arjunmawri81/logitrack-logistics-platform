import AdminSidebar from "../../components/admin/AdminSidebar";
import {
  FaStore,
  FaUserCheck,
  FaBan,
  FaWallet,
  FaEye,
  FaSearch,
} from "react-icons/fa";

import "./Admin.css";

const Merchants = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="admin-content">

        {/* Header */}

        <div className="page-header">
          <div>
            <h1 className="page-title">
              🏢 Merchants Management
            </h1>

            <p className="page-subtitle">
              Manage merchants, wallets and account status
            </p>
          </div>
        </div>

        {/* Stats */}

        <div className="courier-stats">

          <div className="courier-stat-card">
            <FaStore className="stat-icon blue" />
            <h4>Total Merchants</h4>
            <h2>245</h2>
          </div>

          <div className="courier-stat-card">
            <FaUserCheck className="stat-icon green" />
            <h4>Active Merchants</h4>
            <h2>210</h2>
          </div>

          <div className="courier-stat-card">
            <FaBan className="stat-icon red" />
            <h4>Blocked Accounts</h4>
            <h2>12</h2>
          </div>

          <div className="courier-stat-card">
            <FaWallet className="stat-icon orange" />
            <h4>Total Wallet Balance</h4>
            <h2>₹8L</h2>
          </div>

        </div>

        {/* Search */}

        <div className="merchant-search">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search merchants..."
          />

        </div>

        {/* Table */}

        <div className="admin-table-section">

          <h2>Merchant List</h2>

          <table className="admin-table">

            <thead>
              <tr>
                <th>Company</th>
                <th>Owner</th>
                <th>Email</th>
                <th>Wallet</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>
                  <div className="courier-info">
                    <div className="courier-avatar">
                      AB
                    </div>
                    ABC Logistics
                  </div>
                </td>

                <td>Arjun Singh</td>
                <td>abc@test.com</td>
                <td>₹15,000</td>

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
                      FS
                    </div>
                    FastShip Pvt Ltd
                  </div>
                </td>

                <td>Rahul Sharma</td>
                <td>fastship@test.com</td>
                <td>₹8,500</td>

                <td>
                  <span className="pending">
                    Pending
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
                      EC
                    </div>
                    Express Cargo
                  </div>
                </td>

                <td>Amit Kumar</td>
                <td>express@test.com</td>
                <td>₹22,000</td>

                <td>
                  <span className="blocked">
                    Blocked
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

export default Merchants;