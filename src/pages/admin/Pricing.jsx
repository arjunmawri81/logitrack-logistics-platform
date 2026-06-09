import AdminSidebar from "../../components/admin/AdminSidebar";
import "./Admin.css";

const Pricing = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="admin-content">
        <h1>Pricing Management</h1>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Courier</th>
              <th>Weight Slab</th>
              <th>Price</th>
              <th>Margin</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>DTDC</td>
              <td>500gm</td>
              <td>₹45</td>
              <td>₹5</td>
            </tr>

            <tr>
              <td>Delhivery</td>
              <td>1kg</td>
              <td>₹65</td>
              <td>₹8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing;