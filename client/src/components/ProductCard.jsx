function ProductCard({ name, price }) {
  return (
    <div
      style={{
        background: "#fff",
        width: "280px",
        borderRadius: "18px",
        overflow: "hidden",
        boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
        transition: "0.3s",
        cursor: "pointer",
        textAlign: "center",
        paddingBottom: "20px",
      }}
    >
      <div
        style={{
          height: "220px",
          background: "#f3f4f6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "90px",
        }}
      >
        📱
      </div>

      <div style={{ padding: "20px" }}>
        <h2
          style={{
            fontSize: "22px",
            marginBottom: "10px",
            color: "#222",
          }}
        >
          {name}
        </h2>

        <p
          style={{
            color: "#f59e0b",
            fontSize: "20px",
          }}
        >
          ⭐⭐⭐⭐⭐
        </p>

        <h3
          style={{
            color: "#2563eb",
            marginTop: "10px",
            marginBottom: "20px",
            fontSize: "24px",
          }}
        >
          ₹{price}
        </h3>

        <button
          style={{
            background: "#2563eb",
            color: "white",
            padding: "12px 25px",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;