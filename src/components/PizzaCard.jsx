import { useState } from "react";

function PizzaCard({ pizza }) {
  const [selectedSize, setSelectedSize] = useState(30);

  const handleSizeChange = (size) => setSelectedSize(size);

  const getPriceForSize = (size) => {
    switch (size) {
      case 30: return pizza.price;
      case 40: return pizza.price + 30;
      case 50: return pizza.price + 60;
      default: return pizza.price;
    }
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
      <p>{getPriceForSize(selectedSize)} лей</p>
      <div>
        {pizza.sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeChange(size)}
            style={{
              fontWeight: selectedSize === size ? "bold" : "normal",
              background: selectedSize === size ? "#ddd" : "#fff",
              color: "#000",
              marginRight: "5px",
              padding: "5px 10px"
            }}
          >
            {size} см
          </button>
        ))}
      </div>
      <button onClick={() => console.log(`Добавлено в корзину: ${pizza.name}, ${selectedSize} см`)}>
        Добавить в корзину
      </button>
    </div>
  )
  ;
  
}

export default PizzaCard;
