import Sidebar from "../../components/Sidebar";
import {
  FaBox,
  FaCheckCircle,
  FaTruck,
  FaClock,
  FaSearch,
  FaEye,
  FaPlus,
} from "react-icons/fa";

import "./Orders.css";

const Orders = () => {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <div className="page-header">

          <div>
            <h1>Orders Management</h1>
            <p>Manage and track all customer orders</p>
          </div>

          <button className="create-btn">
            <FaPlus />
            Create Order
          </button>

        </div>

        {/* Stats */}

        <div className="stats-grid">

          <div className="stats-card">
            <FaBox className="stats-icon blue" />
            <h4>Total Orders</h4>
            <h2>1250</h2>
          </div>

          <div className="stats-card">
            <FaCheckCircle className="stats-icon green" />
            <h4>Delivered</h4>
            <h2>980</h2>
          </div>

          <div className="stats-card">
            <FaTruck className="stats-icon orange" />
            <h4>In Transit</h4>
            <h2>180</h2>
          </div>

          <div className="stats-card">
            <FaClock className="stats-icon red" />
            <h4>Pending</h4>
            <h2>65</h2>
          </div>

        </div>

        {/* Search */}

        <div className="filter-bar">

          <div className="search-box">

            <FaSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search Order ID..."
            />

          </div>

          <select>
            <option>Status</option>
            <option>Delivered</option>
            <option>Transit</option>
            <option>Pending</option>
          </select>

        </div>

        {/* Table */}

        <div className="table-section">

          <table className="orders-table">

            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Courier</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>#ORD1001</td>
                <td>Rahul Sharma</td>
                <td>DTDC</td>
                <td>₹450</td>

                <td>
                  <span className="badge delivered">
                    Delivered
                  </span>
                </td>

                <td>
                  <button className="view-btn">
                    <FaEye />
                  </button>
                </td>
              </tr>

              <tr>
                <td>#ORD1002</td>
                <td>Amit Kumar</td>
                <td>Delhivery</td>
                <td>₹620</td>

                <td>
                  <span className="badge transit">
                    In Transit
                  </span>
                </td>

                <td>
                  <button className="view-btn">
                    <FaEye />
                  </button>
                </td>
              </tr>

              <tr>
                <td>#ORD1003</td>
                <td>Vikas Singh</td>
                <td>XpressBees</td>
                <td>₹299</td>

                <td>
                  <span className="badge pending">
                    Pending
                  </span>
                </td>

                <td>
                  <button className="view-btn">
                    <FaEye />
                  </button>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Orders;