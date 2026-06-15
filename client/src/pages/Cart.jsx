import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/cart"
      );
      setCartItems(data);
    } catch (error) {
      alert("Failed to load cart");
    }
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        🛒 Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>
          Your cart is empty
        </h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item._id}
              style={{
                background: "#fff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                marginBottom: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,.1)",
              }}
            >
              <div>
                <h2>{item.product}</h2>
                <p>⭐⭐⭐⭐⭐</p>
                <p>Quantity: {item.quantity}</p>
              </div>

              <button
                style={{
                  background: "#2563eb",
                  color: "white",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                View
              </button>
            </div>
          ))}

          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,.1)",
              textAlign: "center",
            }}
          >
            <h2>
              Total Items : {cartItems.length}
            </h2>

            <button
              onClick={() => navigate("/checkout")}
              style={{
                marginTop: "20px",
                background: "#16a34a",
                color: "white",
                padding: "15px 35px",
                border: "none",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;