import React, { useContext, useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import SearchForm from "../Blocks/SearchForm/SearchForm";
import MoviesCardList from "../Blocks/MoviesCardList/MoviesCardList";
import {
  filterMovies,
  filterShortMovies,
} from "../../utils/utils.js";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const SavedMovies = ({ loggedIn, onDeleteClick, savedMoviesList }) => {
  const currentUser = useContext(CurrentUserContext);

  const [isShort, setIsShort] = useState(false);
  const [NotFoundMovies, setNotFoundMovies] = useState(false);
  const [showedMovies, setShowedMovies] = useState(savedMoviesList);
  const [filteredMovies, setFilteredMovies] = useState(showedMovies);

  const handleSearchSubmit = (inputValue) => {
    localStorage.setItem(`${currentUser.email} - shortMovieSearch`, inputValue);

    console.log(savedMoviesList);
    const moviesList = filterMovies(savedMoviesList, inputValue, isShort);
    if (moviesList.length === 0) {
      setNotFoundMovies(true);
    } else {
      setNotFoundMovies(false);
      if (localStorage.getItem(`${currentUser.email} - shortSavedMovies`) === "true") {
        setFilteredMovies(filterShortMovies(moviesList));
        setShowedMovies(filteredMovies);
        console.log(showedMovies);
      }
      else {
        setFilteredMovies(moviesList);
        setShowedMovies(filteredMovies);
        console.log(showedMovies);
      }
    }
  }

  const handleShortFilms = () => {
    if (!isShort) {
      setIsShort(true);
      localStorage.setItem(`${currentUser.email} - shortSavedMovies`, true);
      setShowedMovies(filterShortMovies(filteredMovies));
      filterShortMovies(filteredMovies).length === 0
        ? setNotFoundMovies(true)
        : setNotFoundMovies(false);
    } else {
      setIsShort(false);
      localStorage.setItem(`${currentUser.email} - shortSavedMovies`, false);
      filteredMovies.length === 0
        ? setNotFoundMovies(true)
        : setNotFoundMovies(false);
      setShowedMovies(filteredMovies);
    }
  }

  useEffect(() => {
    if (
      localStorage.getItem(`${currentUser.email} - shortSavedMovies`) === "true"
    ) {
      setIsShort(true);
      setShowedMovies(filterShortMovies(savedMoviesList));
    } else {
      setIsShort(false);
      setShowedMovies(savedMoviesList);
    }
  }, [savedMoviesList, currentUser]);

  useEffect(() => {
    setFilteredMovies(savedMoviesList);
    savedMoviesList.length !== 0
      ? setNotFoundMovies(false)
      : setNotFoundMovies(true);
  }, [savedMoviesList]);

  useEffect(() => {
    if (isShort) {
      setShowedMovies(filterShortMovies(filteredMovies));
    }
    else {
      setShowedMovies(filteredMovies);
    }
    // eslint-disable-next-line
  }, [isShort])

  return (
    <Layout loggedIn={loggedIn}>
      <section className="SavedMovies" id="SavedMovies">
        <SearchForm
          isShort={isShort}
          handleSearchSubmit={handleSearchSubmit}
          handleShortFilms={handleShortFilms}
        ></SearchForm>
        {!NotFoundMovies ? (
          <MoviesCardList
            moviesList={showedMovies}
            savedMoviesList={savedMoviesList}
            onDeleteClick={onDeleteClick}
          />
        ) : (
          <div className="container SavedMovies__NotFound">
            <p>Нет сохраненных фильмов</p>
          </div>
          
        )}
      </section>
    </Layout>
  );
}

export default SavedMovies;
