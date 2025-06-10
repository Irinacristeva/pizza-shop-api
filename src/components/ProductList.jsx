import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CartContext } from "../contexts/CartContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  const API_URL = "https://68485aa5ec44b9f34940a7c3.mockapi.io/products";

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке товаров:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Список пицц</h2>

      {loading ? (
        <div>
          {[...Array(4)].map((_, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <Skeleton height={200} width={200} />
              <Skeleton count={2} />
            </div>
          ))}
        </div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                width: "200px"
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "10px"
                }}
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>
                <strong>{product.price} MDL</strong>
              </p>
              <p style={{ fontStyle: "italic", color: "#555" }}>{product.category}</p>
              <button onClick={() => addToCart(product)}>Добавить в корзину</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
