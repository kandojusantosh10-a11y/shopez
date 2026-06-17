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

      {/* Why Choose SHOPEZ */}

      <div
        style={{
          padding: "80px 20px",
          background: "#f8fafc",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "50px",
            color: "#1e293b",
          }}
        >
          Why Choose SHOPEZ?
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "35px",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              width: "320px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "55px" }}>🚚</div>
            <h2 style={{ color: "#1e293b" }}>Fast Delivery</h2>
            <p style={{ color: "#64748b" }}>
              Quick and reliable delivery across India with real-time tracking.
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "35px",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              width: "320px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "55px" }}>🔒</div>
            <h2 style={{ color: "#1e293b" }}>Secure Payments</h2>
            <p style={{ color: "#64748b" }}>
              Protected transactions with trusted and secure payment methods.
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "35px",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              width: "320px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "55px" }}>⭐</div>
            <h2 style={{ color: "#1e293b" }}>Premium Products</h2>
            <p style={{ color: "#64748b" }}>
              Genuine branded products with quality assurance and best prices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;