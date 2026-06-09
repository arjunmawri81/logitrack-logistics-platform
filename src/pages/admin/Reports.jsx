import AdminSidebar from "../../components/admin/AdminSidebar";
import "./Admin.css";

const Reports = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="admin-content">
        <h1>Reports</h1>

        <div className="admin-cards">
          <div className="admin-card">
            <h3>Shipment Reports</h3>
          </div>

          <div className="admin-card">
            <h3>Revenue Reports</h3>
          </div>

          <div className="admin-card">
            <h3>Merchant Reports</h3>
          </div>

          <div className="admin-card">
            <h3>Courier Reports</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;