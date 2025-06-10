import { useState, useEffect } from "react";
import pizzaData from "../data/pizza.json";
import PizzaCard from "./PizzaCard";
import Search from "./Search";

function PizzaList() {
  const [pizzas, setPizzas] = useState([]);
  const [filteredPizzas, setFilteredPizzas] = useState([]);

  useEffect(() => {
    setPizzas(pizzaData);
    setFilteredPizzas(pizzaData);
  }, []);

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
