import { Link, NavLink } from "react-router-dom";

import {
  FaHome,
  FaBox,
  FaClipboardList,
  FaTruck,
  FaWallet,
  FaFileInvoice,
  FaChartBar,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">

      {/* Logo */}

      <div className="sidebar-header">
        <h2 className="logo">LogiTrack</h2>
        <span className="logo-subtitle">
          Merchant Panel
        </span>
      </div>

      {/* Profile */}

      <div className="sidebar-profile">

        <div className="avatar">
          AS
        </div>

        <div className="profile-info">
          <h4>Arjun Singh</h4>
          <span>Merchant</span>
        </div>

      </div>

      {/* Menu */}

      <ul className="sidebar-menu">

        <li>
          <NavLink to="/dashboard">
            <FaHome />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/orders">
            <FaClipboardList />
            <span>Orders</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/create-shipment">
            <FaBox />
            <span>Create Shipment</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/shipments">
            <FaTruck />
            <span>Shipments</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/tracking">
            <FaTruck />
            <span>Tracking</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/wallet">
            <FaWallet />
            <span>Wallet</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/billing">
            <FaFileInvoice />
            <span>Billing</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/reports">
            <FaChartBar />
            <span>Reports</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile">
            <FaUser />
            <span>Profile</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings">
            <FaCog />
            <span>Settings</span>
          </NavLink>
        </li>

      </ul>

      {/* Logout */}

      <div className="logout-section">

        <Link to="/login">
          <FaSignOutAlt />
          <span>Logout</span>
        </Link>

      </div>

    </div>
  );
};

export default Sidebar;