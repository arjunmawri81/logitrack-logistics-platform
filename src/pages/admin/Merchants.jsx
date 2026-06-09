import AdminSidebar from "../../components/admin/AdminSidebar";
import "./Admin.css";

const Merchants = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="admin-content">
        <h1>Merchants Management</h1>

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
              <td>ABC Logistics</td>
              <td>Arjun Singh</td>
              <td>abc@test.com</td>
              <td>₹15,000</td>
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
              <td>fastship@test.com</td>
              <td>₹8,500</td>
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
              <td>express@test.com</td>
              <td>₹22,000</td>
              <td className="blocked">Blocked</td>
              <td>
                <button className="admin-btn">
                  Unblock
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Merchants;