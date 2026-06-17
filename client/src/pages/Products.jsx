import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(data);
    } catch (error) {
      console.log(error);
      alert("Failed to load products");
    }
  };

  return (
    <div
      style={{
        background: "#f8fafc",
        minHeight: "100vh",
        paddingBottom: "50px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          paddingTop: "40px",
          marginBottom: "40px",
          fontSize: "42px",
          color: "#1e293b",
        }}
      >
        Featured Products
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(320px, 320px))",
          justifyContent: "center",
          gap: "30px",
          padding: "0 40px",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;