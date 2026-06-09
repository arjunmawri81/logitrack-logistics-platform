import AdminSidebar from "../../components/admin/AdminSidebar";
import "./Admin.css";

const Settings = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="admin-content">
        <h1>Platform Settings</h1>

        <div className="admin-cards">
          <div className="admin-card">
            <h3>Email Settings</h3>
          </div>

          <div className="admin-card">
            <h3>SMS Settings</h3>
          </div>

          <div className="admin-card">
            <h3>WhatsApp Settings</h3>
          </div>

          <div className="admin-card">
            <h3>General Settings</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;