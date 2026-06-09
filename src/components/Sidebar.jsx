import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">LogiTrack</h2>

      <ul>
        <li>
          <Link to="/dashboard">🏠 Dashboard</Link>
        </li>

        <li>
          <Link to="/create-shipment">
            📦 Create Shipment
          </Link>
        </li>

        <li>
          <Link to="/shipments">
            📋 Shipments
          </Link>
        </li>

        <li>
          <Link to="/tracking">
            🚚 Tracking
          </Link>
        </li>

        <li>
          <Link to="/wallet">
            💰 Wallet
          </Link>
        </li>

        <li>
          <Link to="/billing">
            📄 Billing
          </Link>
        </li>

        <li>
          <Link to="/profile">
            👤 Profile
          </Link>
        </li>

        <li>
          <Link to="/settings">
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

export default Sidebar;