import React, { useContext, useEffect, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SearchQuery from "./SearchQuery/SearchQuery";
import { useLocation } from "react-router-dom";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import useFormWithValidation from "../../../hooks/useFormValidation";

function SearchForm({ handleSearchSubmit, handleShortFilms, isShort }) {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();
  const { values, handleChange, isValid, setIsValid } = useFormWithValidation();

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    isValid
      ? handleSearchSubmit(values.search)
      : setError("Нужно ввести ключевое слово.");
  };

  useEffect(() => {
    setError("");
  }, [isValid]);

  useEffect(() => {
    if (
      location.pathname === "/movies" &&
      localStorage.getItem(`${currentUser.email} - movieSearch`)
    ) {
      const searchValue = localStorage.getItem(
        `${currentUser.email} - movieSearch`
      );
      values.search = searchValue;
      setIsValid(true);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="SearchForm" id="SearchForm">
      <form className="container">
        <SearchQuery
          name="search"
          autoComplete="off"
          value={values.search}
          change_handler={handleChange}
          subm_handle={handleSubmit}
        />
        <span className="Login__TextError">{error}</span>
        <div className="SearchForm_IsShort">
          <FilterCheckbox
            isShort={isShort}
            handleShortFilms={handleShortFilms}
          ></FilterCheckbox>
          <p className="SearchForm_IsShortText">Короткометражки</p>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
