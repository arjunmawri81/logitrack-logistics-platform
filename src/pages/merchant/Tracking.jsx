import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import api from "../../services/api";
import "./Tracking.css";

const Tracking = () => {
  const [shipmentId, setShipmentId] =
    useState("");

  const [shipment, setShipment] =
    useState(null);

  const handleTrack = async () => {
    try {
      const response = await api.get(
        `/tracking/${shipmentId}`
      );

      setShipment(
        response.data.shipment
      );
    } catch (error) {
      alert(
        error?.response?.data?.message ||
          "Shipment Not Found"
      );
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="tracking-container">
        <h1>Track Shipment</h1>

        <div className="tracking-card">

          <input
            type="text"
            placeholder="Enter Shipment ID"
            value={shipmentId}
            onChange={(e) =>
              setShipmentId(
                e.target.value
              )
            }
          />

          <button
            onClick={handleTrack}
          >
            Track Shipment
          </button>

        </div>

        {shipment && (
          <div className="tracking-result">

            <h2>
              Shipment Details
            </h2>

            <div className="status-box">

              <p>
                <strong>AWB:</strong>{" "}
                {shipment.awb}
              </p>

              <p>
                <strong>
                  Courier:
                </strong>{" "}
                {shipment.courier}
              </p>

              <p>
                <strong>
                  Status:
                </strong>{" "}
                {shipment.status}
              </p>

              <p>
                <strong>
                  Created:
                </strong>{" "}
                {new Date(
                  shipment.createdAt
                ).toLocaleDateString()}
              </p>

            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Tracking;