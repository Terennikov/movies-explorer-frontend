import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onSearch, onFilterChange, isFilterOn, isSearching }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryError, setQueryError] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/movies" &&
      localStorage.getItem("moviesSearchQuery")
    ) {
      const savedSearchQuery = localStorage.getItem("moviesSearchQuery");
      setSearchQuery(savedSearchQuery);
    } else if (
      location.pathname === "/saved-movies" &&
      localStorage.getItem("savedMoviesSearchQuery")
    ) {
      const savedSearchQuery = localStorage.getItem("savedMoviesSearchQuery");
      setSearchQuery(savedSearchQuery);
    }
  }, [location.pathname]);

  useEffect(() => {
    setQueryError("");
  }, [searchQuery]);

  function handleSubmit(e) {
    e.preventDefault();
    if (location.pathname === "/movies") {
      searchQuery
        ? onSearch(searchQuery)
        : setQueryError("Нужно ввести ключевое слово");
    } else {
      onSearch(searchQuery);
    }
  }

  return (
    <section
      className="search-form"
    >
      <form
        className="search-form__form"
        id="search-and-filter"
        action="#"
        name="search-and-filter"
        noValidate
        onSubmit={handleSubmit}
      >
        <input
          className="search-form__search"
          form="search-and-filter"
          name="search"
          placeholder="Фильм"
          type="search"
          autoComplete="off"
          autoCapitalize="off"
          disabled={isSearching ? true : false}
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery || ""}
        />
        <div className="search-form__short">
          <FilterCheckbox
            onFilterChange={onFilterChange}
            isFilterOn={isFilterOn}
            isSearching={isSearching}
          />
        </div>
        <button
          className="search-form__btn-submit hover-button"
          type="submit"
          form="search-and-filter"
        >
          Найти
        </button>
      </form>
      <span className="search-form__error">{queryError}</span>
    </section>
  );
}

export default SearchForm;
