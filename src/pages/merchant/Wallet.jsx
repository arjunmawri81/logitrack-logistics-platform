import Sidebar from "../../components/Sidebar";
import "./Wallet.css";

const Wallet = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="wallet-container">
        <h1>Wallet</h1>

        <div className="balance-card">
          <h2>Available Balance</h2>
          <p>₹25,000</p>

          <button className="recharge-btn">
            Recharge Wallet
          </button>
        </div>

        <div className="transactions-card">
          <h2>Recent Transactions</h2>

          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>08 Jun 2026</td>
                <td>Recharge</td>
                <td>₹5,000</td>
                <td>Success</td>
              </tr>

              <tr>
                <td>07 Jun 2026</td>
                <td>Shipment Charge</td>
                <td>₹350</td>
                <td>Debited</td>
              </tr>

              <tr>
                <td>06 Jun 2026</td>
                <td>Recharge</td>
                <td>₹10,000</td>
                <td>Success</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wallet;