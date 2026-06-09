import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="admin-content">
        <AdminTopbar />

        {/* Stats Cards */}

        <div className="admin-cards">
          <div className="admin-card">
            <h3>Total Merchants</h3>
            <p>245</p>
          </div>

          <div className="admin-card">
            <h3>Total Shipments</h3>
            <p>12,450</p>
          </div>

          <div className="admin-card">
            <h3>Total Revenue</h3>
            <p>₹12.5L</p>
          </div>

          <div className="admin-card">
            <h3>Active Couriers</h3>
            <p>8</p>
          </div>

          <div className="admin-card">
            <h3>Pending Orders</h3>
            <p>156</p>
          </div>
        </div>

        {/* Recent Merchants */}

        <div className="admin-table-section">
          <h2>Recent Merchants</h2>

          <table className="admin-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Owner</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>ABC Logistics</td>
                <td>Arjun Singh</td>
                <td className="active">Active</td>
                <td>
                  <button className="admin-btn">
                    View
                  </button>
                </td>
              </tr>

              <tr>
                <td>FastShip Pvt Ltd</td>
                <td>Rahul Sharma</td>
                <td className="pending">Pending</td>
                <td>
                  <button className="admin-btn">
                    Approve
                  </button>
                </td>
              </tr>

              <tr>
                <td>Express Cargo</td>
                <td>Amit Kumar</td>
                <td className="active">Active</td>
                <td>
                  <button className="admin-btn">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Analytics Section */}

        <div
          className="admin-cards"
          style={{ marginTop: "40px" }}
        >
          <div className="admin-card">
            <h3>Courier Status</h3>

            <p style={{ fontSize: "18px", color: "#111827" }}>
              <span className="active">●</span> DTDC
            </p>

            <p style={{ fontSize: "18px", color: "#111827" }}>
              <span className="active">●</span> Delhivery
            </p>

            <p style={{ fontSize: "18px", color: "#111827" }}>
              <span className="blocked">●</span> Blue Dart
            </p>
          </div>

          <div className="admin-card">
            <h3>Today's Shipments</h3>
            <p>458</p>
          </div>

          <div className="admin-card">
            <h3>COD Orders</h3>
            <p>125</p>
          </div>

          <div className="admin-card">
            <h3>New Merchants</h3>
            <p>12</p>
          </div>

          <div className="admin-card">
            <h3>Support Tickets</h3>
            <p>18</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;