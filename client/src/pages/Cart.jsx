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

  const removeItem = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/cart/${id}`
      );

      setCartItems(
        cartItems.filter((item) => item._id !== id)
      );

      alert("Item Removed From Cart");
    } catch (error) {
      console.log(error);
      alert("Failed To Remove Item");
    }
  };

  return (
    <div
      style={{
        maxWidth: "1300px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "42px",
          color: "#1e293b",
        }}
      >
        🛒 Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>
          Your cart is empty
        </h2>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "2",
              minWidth: "700px",
            }}
          >
            {cartItems.map((item) => (
              <div
                key={item._id}
                style={{
                  background: "#fff",
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  padding: "20px",
                  marginBottom: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,.08)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
                  alt="product"
                  style={{
                    width: "140px",
                    height: "140px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                <div style={{ flex: 1 }}>
                  <h2>{item.product}</h2>

                  <p style={{ color: "#64748b" }}>
                    Premium Product
                  </p>

                  <h3 style={{ color: "#2563eb" }}>
                    ₹79,999
                  </h3>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                  <p
                    style={{
                      color: "green",
                      fontWeight: "bold",
                    }}
                  >
                    In Stock
                  </p>
                </div>

                <button
                  onClick={() =>
                    removeItem(item._id)
                  }
                  style={{
                    background: "#ef4444",
                    color: "#fff",
                    border: "none",
                    padding: "12px 20px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div
            style={{
              flex: "1",
              minWidth: "300px",
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,.08)",
            }}
          >
            <h2>Price Details</h2>

            <p>Total Items: {cartItems.length}</p>

            <h2
              style={{
                color: "#2563eb",
              }}
            >
              Final Price: ₹77,999
            </h2>

            <button
              onClick={() =>
                navigate("/checkout")
              }
              style={{
                marginTop: "25px",
                width: "100%",
                background: "#2563eb",
                color: "white",
                padding: "15px",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;