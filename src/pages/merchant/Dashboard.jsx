import Sidebar from "../../components/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <h1>Merchant Dashboard</h1>

        {/* Stats Cards */}

        <div className="cards">
          <div className="card">
            <h3>Total Orders</h3>
            <p>1250</p>
          </div>

          <div className="card">
            <h3>Delivered</h3>
            <p>980</p>
          </div>

          <div className="card">
            <h3>In Transit</h3>
            <p>180</p>
          </div>

          <div className="card">
            <h3>Pending Orders</h3>
            <p>65</p>
          </div>

          <div className="card">
            <h3>Cancelled Orders</h3>
            <p>25</p>
          </div>

          <div className="card">
            <h3>Revenue</h3>
            <p>₹1.2L</p>
          </div>
        </div>

        {/* Recent Shipments */}

        <div className="recent-shipments">
          <h2>Recent Shipments</h2>

          <table>
            <thead>
              <tr>
                <th>AWB Number</th>
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

        {/* Bottom Analytics */}

        <div className="cards analytics-section">
          <div className="card">
            <h3>Top Courier</h3>
            <p>DTDC</p>
          </div>

          <div className="card">
            <h3>COD Orders</h3>
            <p>320</p>
          </div>

          <div className="card">
            <h3>RTO Orders</h3>
            <p>42</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;