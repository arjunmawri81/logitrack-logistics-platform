import Sidebar from "../../components/Sidebar";
import "./Tracking.css";

const Tracking = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="tracking-container">
        <h1>Track Shipment</h1>

        {/* Search Section */}
        <div className="tracking-card">
          <input
            type="text"
            placeholder="Enter AWB Number"
          />

          <button>
            Track Shipment
          </button>
        </div>

        {/* Shipment Details */}
        <div className="tracking-result">
          <h2>Shipment Details</h2>

          <div className="status-box">
            <p>
              <strong>AWB:</strong> AWB12345
            </p>

            <p>
              <strong>Courier:</strong> DTDC
            </p>

            <p>
              <strong>Status:</strong>
              <span className="status-badge">
                In Transit
              </span>
            </p>

            <p>
              <strong>Expected Delivery:</strong>
              {" "}10 June 2026
            </p>

            {/* Timeline */}
            <div className="timeline">
              <div className="timeline-item">
                <h4>Order Created</h4>
                <p>08 June 2026 - 10:00 AM</p>
              </div>

              <div className="timeline-item">
                <h4>Picked Up</h4>
                <p>08 June 2026 - 03:00 PM</p>
              </div>

              <div className="timeline-item">
                <h4>In Transit</h4>
                <p>09 June 2026 - 09:00 AM</p>
              </div>

              <div className="timeline-item">
                <h4>Out For Delivery</h4>
                <p>Expected Soon</p>
              </div>

              <div className="timeline-item">
                <h4>Delivered</h4>
                <p>Pending</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;