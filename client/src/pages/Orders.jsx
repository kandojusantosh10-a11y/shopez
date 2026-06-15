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
    <div>
      <h1>My Orders</h1>

      {orders.map((order) => (
        <div
          key={order._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>User: {order.user}</h3>

          <p>
            Products: {order.products.join(", ")}
          </p>

          <p>Total Price: ₹{order.totalPrice}</p>

          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;