import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
  {cartItems.map((item, index) => (
    <li key={index} style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
      <img
        src={item.image}
        alt={item.name}
        style={{ width: "80px", height: "80px", objectFit: "cover", marginRight: "15px", borderRadius: "8px" }}
      />
      <div>
        <strong>{item.name}</strong> — {item.price} MDL ({item.size} см)
        <br />
        <button
          style={{ marginTop: "5px" }}
          onClick={() => removeFromCart(item.id)}
        >
          Удалить
        </button>
      </div>
    </li>
  ))}
</ul>

      )}
    </div>
  );
}
