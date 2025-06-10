import React, { useState } from "react";

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

  /**
   * Обработчик выбора размера пиццы.
   * Обновляет состояние выбранного размера.
   *
   * @param {number} size - Размер пиццы, выбранный пользователем
   */
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="pizza-card">
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
      <p>{pizza.price} лей.</p>

      <div>
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
              cursor: "pointer"
            }}
          >
            {size} см.
          </button>
        ))}
      </div>

      <button>Добавить в корзину</button>
    </div>
  );
}

export default PizzaCard;
