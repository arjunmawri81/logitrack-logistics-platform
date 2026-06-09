import "./AdminTopbar.css";

const AdminTopbar = () => {
  return (
    <div className="admin-topbar">
      <div>
        <h2>Welcome Admin 👋</h2>
        <p>Manage your logistics platform</p>
      </div>

      <div className="topbar-right">
        <button className="notification-btn">
          🔔
        </button>

        <div className="admin-profile">
          <span>AS</span>
        </div>
      </div>
    </div>
  );
};

export default AdminTopbar;