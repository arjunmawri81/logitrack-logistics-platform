import Sidebar from "../../components/Sidebar";
import "./CreateShipment.css";

const CreateShipment = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="shipment-container">
        <h1>Create Shipment</h1>

        <form className="shipment-form">

          {/* Sender Details */}
          <div className="form-section">
            <h2>Sender Details</h2>

            <input
              type="text"
              placeholder="Sender Name"
            />

            <input
              type="text"
              placeholder="Sender Mobile Number"
            />

            <textarea
              placeholder="Sender Address"
            ></textarea>
          </div>

          {/* Receiver Details */}
          <div className="form-section">
            <h2>Receiver Details</h2>

            <input
              type="text"
              placeholder="Receiver Name"
            />

            <input
              type="text"
              placeholder="Receiver Mobile Number"
            />

            <textarea
              placeholder="Receiver Address"
            ></textarea>
          </div>

          {/* Package Details */}
          <div className="form-section">
            <h2>Package Details</h2>

            <input
              type="number"
              placeholder="Weight (KG)"
            />

            <input
              type="number"
              placeholder="Length (CM)"
            />

            <input
              type="number"
              placeholder="Width (CM)"
            />

            <input
              type="number"
              placeholder="Height (CM)"
            />
          </div>

          {/* Courier Partner */}
          <div className="form-section">
            <h2>Courier Partner</h2>

            <select>
              <option>Select Courier Partner</option>
              <option>DTDC</option>
              <option>Delhivery</option>
              <option>Blue Dart</option>
              <option>XpressBees</option>
              <option>Ecom Express</option>
            </select>
          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            Create Shipment
          </button>

        </form>
      </div>
    </div>
  );
};

export default CreateShipment;