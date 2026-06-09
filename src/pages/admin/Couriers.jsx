import AdminSidebar from "../../components/admin/AdminSidebar";
import "./Admin.css";

const Couriers = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="admin-content">
        <h1>Courier Partners</h1>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Courier</th>
              <th>API Status</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>DTDC</td>
              <td>Connected</td>
              <td>1</td>
              <td className="active">Active</td>
            </tr>

            <tr>
              <td>Delhivery</td>
              <td>Connected</td>
              <td>2</td>
              <td className="active">Active</td>
            </tr>

            <tr>
              <td>Blue Dart</td>
              <td>Disconnected</td>
              <td>3</td>
              <td className="blocked">Inactive</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Couriers;