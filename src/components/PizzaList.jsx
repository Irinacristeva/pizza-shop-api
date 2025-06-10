import React, { useState, useEffect } from "react";
import pizzaData from "../data/pizza.json";
import PizzaCard from "./PizzaCard";
import Search from "./Search";

/**
 * Компонент списка пицц.
 * Загружает данные о пиццах и отображает их,
 * поддерживает поиск по названию.
 *
 * @returns {JSX.Element} JSX-разметка списка пицц с поиском
 */
function PizzaList() {
  const [pizzas, setPizzas] = useState([]);
  const [filteredPizzas, setFilteredPizzas] = useState([]);

  // Загружаем данные при монтировании компонента
  useEffect(() => {
    setPizzas(pizzaData);
    setFilteredPizzas(pizzaData);
  }, []);

  /**
   * Обработчик поиска по названию.
   * Фильтрует пиццы по строке запроса.
   *
   * @param {string} query - Строка для поиска
   */
  const handleSearch = (query) => {
    const filtered = pizzas.filter((pizza) =>
      pizza.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPizzas(filtered);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <div className="pizza-list">
        {filteredPizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

export default PizzaList;
