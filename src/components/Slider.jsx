import { useState, useEffect } from "react";

const slides = [
  {
    text: "Добро пожаловать в нашу пиццерию!",
    image: "https://obrazovaka.ru/wp-content/uploads/2017/08/udarenie-v-slove-picceriya.jpg"
  },
  {
    text: "Свежие и вкусные пиццы каждый день!",
    image: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpg"
  },
  {
    text: "Скидка 10% на первую покупку!",
    image: "https://дом-пиццы.рф/assets/images/slider/slide-10.png"
  }
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
    <div className="slider" style={{ textAlign: "center" }}>
      <button onClick={prevSlide}>Назад</button>
      <div style={{ margin: "10px 0" }}>
        <img 
          src={slides[currentSlide].image} 
          alt="Слайд пиццы" 
          style={{ width: "300px", height: "200px", objectFit: "cover", borderRadius: "10px" }} 
        />
      </div>
      <span style={{ display: "block", fontSize: "1.2rem", marginBottom: "10px" }}>
        {slides[currentSlide].text}
      </span>
      <button onClick={nextSlide}>Вперед</button>
    </div>
  );
}

export default Slider;
