import Sidebar from "../../components/Sidebar";
import "./Shipments.css";

const Shipments = () => {
  return (
    <div className="shipments-page">
      <Sidebar />

      <div className="shipments-content">
        <h1>All Shipments</h1>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>AWB Number</th>
                <th>Courier</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>AWB12345</td>
                <td>DTDC</td>
                <td className="status-delivered">
                  Delivered
                </td>
                <td>08-06-2026</td>
              </tr>

              <tr>
                <td>AWB67890</td>
                <td>Delhivery</td>
                <td className="status-transit">
                  In Transit
                </td>
                <td>08-06-2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Shipments;