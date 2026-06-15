import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 60px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <h1
          style={{
            color: "#2563eb",
            margin: 0,
            fontSize: "32px",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          SHOPEZ
        </h1>
      </Link>

      <div
        style={{
          display: "flex",
          gap: "35px",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "600",
          }}
        >
          Home
        </Link>

        <Link
          to="/products"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "600",
          }}
        >
          Products
        </Link>

        <Link
          to="/cart"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "600",
          }}
        >
          Cart
        </Link>

        <Link
          to="/orders"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "600",
          }}
        >
          Orders
        </Link>

        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "#ffffff",
            background: "#2563eb",
            padding: "10px 18px",
            borderRadius: "8px",
            fontWeight: "600",
          }}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;