function Search({ onSearch }) {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Поиск..."
      onChange={handleSearchChange}
    />
  );
}

export default Search;
