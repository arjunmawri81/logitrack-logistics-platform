import Sidebar from "../../components/Sidebar";
import "./Billing.css";

const Billing = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="billing-container">
        <h1>Billing & Invoices</h1>

        <div className="billing-summary">
          <div className="bill-card">
            <h3>Total Billing</h3>
            <p>₹1,25,000</p>
          </div>

          <div className="bill-card">
            <h3>Paid</h3>
            <p>₹1,00,000</p>
          </div>

          <div className="bill-card">
            <h3>Pending</h3>
            <p>₹25,000</p>
          </div>
        </div>

        <div className="invoice-table">
          <h2>Invoices</h2>

          <table>
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Download</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>INV001</td>
                <td>08 Jun 2026</td>
                <td>₹5,000</td>
                <td>Paid</td>
                <td>
                  <button>Download</button>
                </td>
              </tr>

              <tr>
                <td>INV002</td>
                <td>07 Jun 2026</td>
                <td>₹3,500</td>
                <td>Pending</td>
                <td>
                  <button>Download</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Billing;