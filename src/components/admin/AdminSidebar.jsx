import { Link } from "react-router-dom";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2 className="admin-logo">LogiTrack Admin</h2>

      <ul>
        <li>
          <Link to="/admin/dashboard">
            🏠 Dashboard
          </Link>
        </li>

        <li>
          <Link to="/admin/users">
            👥 Users
          </Link>
        </li>

        <li>
          <Link to="/admin/merchants">
            🏢 Merchants
          </Link>
        </li>

        <li>
          <Link to="/admin/couriers">
            🚚 Couriers
          </Link>
        </li>

        <li>
          <Link to="/admin/pricing">
            💲 Pricing
          </Link>
        </li>

        <li>
          <Link to="/admin/revenue">
            📈 Revenue
          </Link>
        </li>

        <li>
          <Link to="/admin/reports">
            📊 Reports
          </Link>
        </li>

        <li>
          <Link to="/admin/settings">
            ⚙️ Settings
          </Link>
        </li>

        <li>
          <Link to="/login">
            🚪 Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;