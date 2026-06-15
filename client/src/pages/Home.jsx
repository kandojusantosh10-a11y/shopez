import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>

      {/* Hero Section */}

      <div
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#7c3aed)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          Welcome to SHOPEZ
        </h1>

        <p
          style={{
            fontSize: "22px",
            marginBottom: "35px",
          }}
        >
          Discover Premium Electronics at the Best Prices
        </p>

        <button
          onClick={() => navigate("/products")}
          style={{
            background: "white",
            color: "#2563eb",
            padding: "15px 35px",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </div>

      {/* Features */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "60px 20px",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,.1)",
            width: "280px",
          }}
        >
          <h2>🚚 Fast Delivery</h2>
          <p>Quick delivery across India.</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,.1)",
            width: "280px",
          }}
        >
          <h2>🔒 Secure Payment</h2>
          <p>100% safe and secure checkout.</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,.1)",
            width: "280px",
          }}
        >
          <h2>⭐ Premium Quality</h2>
          <p>Top brands with genuine products.</p>
        </div>
      </div>

    </div>
  );
}

export default Home;