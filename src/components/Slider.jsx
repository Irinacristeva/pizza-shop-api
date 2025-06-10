import { useState, useEffect } from "react";

const slides = [
  "Добро пожаловать в нашу пиццерию!",
  "Свежие и вкусные пиццы каждый день!",
  "Скидка 10% на первую покупку!"
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      <button onClick={prevSlide}>Назад</button>
      <span>{slides[currentSlide]}</span>
      <button onClick={nextSlide}>Вперед</button>
    </div>
  );
}

export default Slider;
