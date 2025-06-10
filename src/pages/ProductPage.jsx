import React from 'react';
import { useParams } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

function ProductPage() {
  const { id } = useParams(); // Получаем параметр id из маршрута

  if (isNaN(id)) {
    return <NotFoundPage />; // Проверка на валидность id (должно быть числом)
  }

  return (
    <div>
      <h1>Товар №{id}</h1>
      {/* Здесь будет логика для отображения данных товара */}
    </div>
  );
}

export default ProductPage;
