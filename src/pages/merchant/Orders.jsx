import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import api from "../../services/api";

import {
  FaBox,
  FaSearch,
} from "react-icons/fa";

import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await api.get("/orders");

      setOrders(response.data.orders || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">

        <div className="page-header">
          <div>
            <h1>Orders Management</h1>
            <p>
              Manage and track all customer orders
            </p>
          </div>

          <button className="create-btn">
            Create Order
          </button>
        </div>

        {/* Stats */}

        <div className="stats-grid">
          <div className="stats-card">
            <FaBox className="stats-icon" />
            <h4>Total Orders</h4>
            <h2>{orders.length}</h2>
          </div>
        </div>

        {/* Search */}

        <div className="filter-bar">
          <div className="search-box">
            <FaSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search Orders..."
            />
          </div>
        </div>

        {/* Table */}

        <div className="table-section">
          <table className="orders-table">

            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order._id}>
                    <td>
                      {order._id}
                    </td>

                    <td>
                      {order.customerName}
                    </td>

                    <td>
                      ₹{order.amount}
                    </td>

                    <td>
                      {order.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    No Orders Found
                  </td>
                </tr>
              )}

            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default Orders;