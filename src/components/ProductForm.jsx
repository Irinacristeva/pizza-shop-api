import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const API_URL = "https://68485aa5ec44b9f34940a7c3.mockapi.io/products";

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Введите название";
    if (!formData.description.trim()) newErrors.description = "Введите описание";
    if (!formData.price || isNaN(formData.price) || Number(formData.price) <= 0)
      newErrors.price = "Введите корректную цену";
    if (!formData.image.trim()) newErrors.image = "Введите ссылку на изображение";
    if (!formData.category.trim()) newErrors.category = "Введите категорию";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await axios.post(API_URL, formData);
        navigate("/"); // возвращаемся на главную
      } catch (error) {
        console.error("Ошибка при добавлении товара:", error);
      }
    }
  };

  return (
    <div>
      <h2>Добавить новую пиццу</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Название:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label>Описание:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} />
          {errors.description && <p style={{ color: "red" }}>{errors.description}</p>}
        </div>

        <div>
          <label>Цена:</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
          {errors.price && <p style={{ color: "red" }}>{errors.price}</p>}
        </div>

        <div>
          <label>Ссылка на изображение:</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
          {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}
        </div>

        <div>
          <label>Категория:</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} />
          {errors.category && <p style={{ color: "red" }}>{errors.category}</p>}
        </div>

        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default ProductForm;
