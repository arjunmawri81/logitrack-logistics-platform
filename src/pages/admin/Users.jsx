import AdminSidebar from "../../components/admin/AdminSidebar";
import {
  FaUsers,
  FaUserShield,
  FaUserTie,
  FaUserClock,
  FaEye,
  FaSearch,
} from "react-icons/fa";

import "./Admin.css";

const Users = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="admin-content">

        {/* Header */}

        <div className="page-header">
          <div>
            <h1 className="page-title">
              👥 Users Management
            </h1>

            <p className="page-subtitle">
              Manage platform users, admins and support staff
            </p>
          </div>
        </div>

        {/* Stats */}

        <div className="courier-stats">

          <div className="courier-stat-card">
            <FaUsers className="stat-icon blue" />
            <h4>Total Users</h4>
            <h2>1,254</h2>
          </div>

          <div className="courier-stat-card">
            <FaUserShield className="stat-icon green" />
            <h4>Admins</h4>
            <h2>12</h2>
          </div>

          <div className="courier-stat-card">
            <FaUserTie className="stat-icon orange" />
            <h4>Merchants</h4>
            <h2>245</h2>
          </div>

          <div className="courier-stat-card">
            <FaUserClock className="stat-icon red" />
            <h4>Pending Users</h4>
            <h2>8</h2>
          </div>

        </div>

        {/* Search */}

        <div className="merchant-search">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search users..."
          />

        </div>

        {/* Table */}

        <div className="admin-table-section">

          <h2>User List</h2>

          <table className="admin-table">

            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>
                  <div className="courier-info">
                    <div className="courier-avatar">
                      AS
                    </div>
                    Arjun Singh
                  </div>
                </td>

                <td>arjun@test.com</td>

                <td>Super Admin</td>

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
                      RS
                    </div>
                    Rahul Sharma
                  </div>
                </td>

                <td>rahul@test.com</td>

                <td>Admin</td>

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
                      AK
                    </div>
                    Amit Kumar
                  </div>
                </td>

                <td>amit@test.com</td>

                <td>Support</td>

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

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
};

export default Users;