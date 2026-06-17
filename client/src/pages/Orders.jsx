import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/orders"
      );

      setOrders(data);
    } catch (error) {
      alert("Failed to load orders");
    }
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          color: "#1e293b",
          marginBottom: "40px",
        }}
      >
        📦 My Orders
      </h1>

      {orders.length === 0 ? (
        <h2
          style={{
            textAlign: "center",
            color: "#64748b",
          }}
        >
          No Orders Found
        </h2>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            style={{
              background: "#fff",
              padding: "25px",
              marginBottom: "25px",
              borderRadius: "16px",
              boxShadow:
                "0 6px 18px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <div>
                <h3
                  style={{
                    color: "#2563eb",
                  }}
                >
                  Order ID
                </h3>

                <p>{order._id}</p>

                <h4>User</h4>
                <p>{order.user}</p>
              </div>

              <div>
                <h3>Status</h3>

                <span
                  style={{
                    background:
                      order.status === "Delivered"
                        ? "#dcfce7"
                        : "#fef3c7",
                    color:
                      order.status === "Delivered"
                        ? "green"
                        : "#d97706",
                    padding: "8px 14px",
                    borderRadius: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {order.status}
                </span>
              </div>
            </div>

            <hr
              style={{
                margin: "20px 0",
              }}
            />

            <h3>Products</h3>

            <ul>
              {order.products.map(
                (product, index) => (
                  <li key={index}>
                    {product}
                  </li>
                )
              )}
            </ul>

            <h2
              style={{
                color: "#2563eb",
                marginTop: "20px",
              }}
            >
              ₹{order.totalPrice}
            </h2>

            <button
              style={{
                marginTop: "15px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Track Order
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;