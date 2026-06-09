import AdminSidebar from "../../components/admin/AdminSidebar";
import "./Admin.css";

const Users = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="admin-content">
        <h1>Users Management</h1>

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
              <td>Arjun Singh</td>
              <td>arjun@test.com</td>
              <td>Super Admin</td>
              <td className="active">Active</td>
              <td>
                <button className="admin-btn">
                  View
                </button>
              </td>
            </tr>

            <tr>
              <td>Rahul Sharma</td>
              <td>rahul@test.com</td>
              <td>Admin</td>
              <td className="active">Active</td>
              <td>
                <button className="admin-btn">
                  View
                </button>
              </td>
            </tr>

            <tr>
              <td>Amit Kumar</td>
              <td>amit@test.com</td>
              <td>Support</td>
              <td className="pending">Pending</td>
              <td>
                <button className="admin-btn">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;