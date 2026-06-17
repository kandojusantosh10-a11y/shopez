import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        boxShadow: "0 2px 15px rgba(0,0,0,0.08)",
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
            fontSize: "34px",
            fontWeight: "bold",
          }}
        >
          SHOPEZ
        </h1>
      </Link>

      <input
        type="text"
        placeholder="Search products..."
        style={{
          width: "350px",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
          outline: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#374151",
            fontWeight: "600",
          }}
        >
          Home
        </Link>

        <Link
          to="/products"
          style={{
            textDecoration: "none",
            color: "#374151",
            fontWeight: "600",
          }}
        >
          Products
        </Link>

        <Link
          to="/cart"
          style={{
            textDecoration: "none",
            color: "#374151",
            fontWeight: "600",
          }}
        >
          🛒 Cart
        </Link>

        <Link
          to="/orders"
          style={{
            textDecoration: "none",
            color: "#374151",
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