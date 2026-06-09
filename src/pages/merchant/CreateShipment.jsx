import Sidebar from "../../components/Sidebar";
import { FaTruck, FaSave } from "react-icons/fa";
import "./CreateShipment.css";

const CreateShipment = () => {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="shipment-content">

        <div className="page-header">

          <div>
            <h1>Create Shipment</h1>
            <p>Create and book a new shipment</p>
          </div>

        </div>

        <form className="shipment-form">

          {/* Sender */}

          <div className="form-card">

            <h2>Sender Details</h2>

            <div className="grid-2">

              <input type="text" placeholder="Sender Name" />

              <input
                type="text"
                placeholder="Sender Mobile"
              />

            </div>

            <textarea
              placeholder="Sender Address"
            ></textarea>

            <input
              type="text"
              placeholder="Pickup Pincode"
            />

          </div>

          {/* Receiver */}

          <div className="form-card">

            <h2>Receiver Details</h2>

            <div className="grid-2">

              <input type="text" placeholder="Receiver Name" />

              <input
                type="text"
                placeholder="Receiver Mobile"
              />

            </div>

            <textarea
              placeholder="Receiver Address"
            ></textarea>

            <input
              type="text"
              placeholder="Delivery Pincode"
            />

          </div>

          {/* Order */}

          <div className="form-card">

            <h2>Order Details</h2>

            <div className="grid-2">

              <input
                type="text"
                placeholder="Order ID"
              />

              <input
                type="text"
                placeholder="Product Name"
              />

            </div>

            <div className="grid-2">

              <input
                type="number"
                placeholder="Product Value"
              />

              <input
                type="number"
                placeholder="COD Amount"
              />

            </div>

          </div>

          {/* Package */}

          <div className="form-card">

            <h2>Package Details</h2>

            <div className="grid-4">

              <input
                type="number"
                placeholder="Weight"
              />

              <input
                type="number"
                placeholder="Length"
              />

              <input
                type="number"
                placeholder="Width"
              />

              <input
                type="number"
                placeholder="Height"
              />

            </div>

          </div>

          {/* Courier */}

          <div className="form-card">

            <h2>Select Courier</h2>

            <div className="courier-grid">

              <div className="courier-card">
                DTDC
                <span>₹52</span>
              </div>

              <div className="courier-card">
                Delhivery
                <span>₹58</span>
              </div>

              <div className="courier-card">
                XpressBees
                <span>₹61</span>
              </div>

            </div>

          </div>

          {/* Actions */}

          <div className="action-buttons">

            <button
              type="button"
              className="draft-btn"
            >
              <FaSave />
              Save Draft
            </button>

            <button
              type="submit"
              className="submit-btn"
            >
              <FaTruck />
              Create Shipment
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default CreateShipment;