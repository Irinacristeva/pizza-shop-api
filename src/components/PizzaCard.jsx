import React, { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

/**
 * Компонент карточки пиццы.
 * Отображает изображение, название, описание, цену, доступные размеры,
 * а также позволяет выбрать размер и добавить пиццу в корзину.
 *
 * @param {Object} props - Свойства компонента
 * @param {Object} props.pizza - Объект пиццы с данными
 * @param {number} props.pizza.id - Уникальный идентификатор пиццы
 * @param {string} props.pizza.name - Название пиццы
 * @param {string} props.pizza.description - Описание пиццы
 * @param {number} props.pizza.price - Цена пиццы
 * @param {string} props.pizza.image - URL изображения пиццы
 * @param {string} props.pizza.category - Категория пиццы
 * @param {number[]} props.pizza.sizes - Массив доступных размеров
 * @returns {JSX.Element} JSX-разметка карточки пиццы
 */
function PizzaCard({ pizza }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart } = useContext(CartContext);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart({ ...pizza, size: selectedSize });
  };

  return (
    <div className="pizza-card" style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "12px", margin: "10px", width: "280px" }}>
      <img
        src={pizza.image}
        alt={pizza.name}
        style={{
          width: "250px",
          height: "250px",
          objectFit: "cover",
          borderRadius: "12px"
        }}
      />
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p><strong>{pizza.price} лей</strong></p>

      <div style={{ marginBottom: "10px" }}>
        {pizza.sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeChange(size)}
            style={{
              backgroundColor: selectedSize === size ? "#ffe066" : "#f0f0f0",
              color: "#000",
              margin: "0 5px",
              padding: "5px 10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              cursor: "pointer"
            }}
          >
            {size} см
          </button>
        ))}
      </div>

      <button
        onClick={handleAddToCart}
        disabled={!selectedSize}
        style={{
          backgroundColor: selectedSize ? "#ffcc00" : "#e0e0e0",
          color: selectedSize ? "#000" : "#777",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: selectedSize ? "pointer" : "not-allowed"
        }}
      >
        Добавить в корзину
      </button>
    </div>
  );
}

export default PizzaCard;
