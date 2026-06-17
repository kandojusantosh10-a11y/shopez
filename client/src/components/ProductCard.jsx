import axios from "axios";

function ProductCard({ product }) {
  if (!product) return null;

  const handleAddToCart = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/cart",
        {
          user: "Santosh",
          product: product.name,
          image: product.image,
          price: product.price,
          quantity: 1,
        }
      );

      alert("✅ Product Added To Cart");
    } catch (error) {
      console.log(error);
      alert("❌ Failed To Add Product");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          background: "#f8fafc",
          padding: "15px",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "260px",
            objectFit: "contain",
          }}
        />
      </div>

      <div style={{ padding: "18px" }}>
        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <h2 style={{ color: "#2563eb" }}>
          ₹{product.price}
        </h2>

        <button
          onClick={handleAddToCart}
          style={{
            width: "100%",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "12px",
            borderRadius: "8px",
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