import React from "react";

/**
 * Компонент поиска.
 * Отображает поле ввода и вызывает функцию onSearch при изменении текста.
 *
 * @param {Object} props - Свойства компонента
 * @param {(query: string) => void} props.onSearch - Функция для обновления списка по запросу
 * @returns {JSX.Element} JSX-разметка поля поиска
 */
function Search({ onSearch }) {
  /**
   * Обработчик изменения текста в поле поиска.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - Событие изменения input
   */
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Поиск..."
      onChange={handleSearchChange}
      style={{ padding: "8px", width: "100%", marginBottom: "20px" }}
    />
  );
}

export default Search;
