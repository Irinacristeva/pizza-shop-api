import React from 'react';
import { Link } from 'react-router-dom'; // Для ссылок на другие страницы

function Header() {
  return (
    <header>
      <h1>Интернет-магазин Пиццы</h1>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/cart">Корзина</Link></li>
          <li><Link to="/about">О нас</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
