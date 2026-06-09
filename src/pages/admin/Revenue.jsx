import AdminSidebar from "../../components/admin/AdminSidebar";
import "./Admin.css";

const Revenue = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="admin-content">
        <h1>Revenue Dashboard</h1>

        <div className="admin-cards">
          <div className="admin-card">
            <h3>Total Revenue</h3>
            <p>₹12.5L</p>
          </div>

          <div className="admin-card">
            <h3>Commission Earned</h3>
            <p>₹2.1L</p>
          </div>

          <div className="admin-card">
            <h3>COD Revenue</h3>
            <p>₹4.3L</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;