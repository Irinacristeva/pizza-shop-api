import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Главная</Link> | <Link to="/cart">Корзина</Link> | <Link to="/about">О нас</Link>
        </nav>
      </header>

      <main>
        <Outlet />

        
      </main>

      <footer>
        <p>© 2025 Интернет-магазин Пиццы. Все права защищены.</p>
      </footer>
    </div>
  );
}
