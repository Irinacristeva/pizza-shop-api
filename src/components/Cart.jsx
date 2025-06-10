import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

/**
 * Компонент корзины.
 * Отображает список добавленных товаров и кнопку удаления.
 */
export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <p>Корзина пуста.</p>;
  }

  return (
    <div>
      <h3>Ваши товары:</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cartItems.map((item, index) => (
          <li
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              marginBottom: "15px",
              display: "flex",
              alignItems: "center",
              gap: "20px"
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100px", height: "100px", borderRadius: "10px", objectFit: "cover" }}
            />
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: "5px 0" }}>{item.name}</h4>
              <p style={{ margin: "5px 0" }}>Размер: {item.size} см</p>
              <p style={{ margin: "5px 0" }}>Цена: {item.price} MDL</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                padding: "8px 12px",
                backgroundColor: "#ff6666",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
