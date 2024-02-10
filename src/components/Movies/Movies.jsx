import React, { useContext, useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import SearchForm from "../Blocks/SearchForm/SearchForm";
import MoviesCardList from "../Blocks/MoviesCardList/MoviesCardList";
import {
  transformMovies, 
  filterMovies, 
  filterShortMovies, 
} from "../../utils/utils.js";
import moviesApi from "../../utils/MoviesApi.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

function Movies({
  loggedIn,
  setIsLoader,
  savedMoviesList,
  onLikeClick,
  onDeleteClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  const [isShort, setIsShort] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]); 
  const [filteredMovies, setFilteredMovies] = useState([]); 
  const [NotFoundMovies, setNotFoundMovies] = useState(false); 
  const [isAllMovies, setIsAllMovies] = useState([]); 
  const [errors, setErrors] = useState(false)

  const handleSetFilteredMovies = (movies, userQuery, shortMoviesCheckbox) => {
    const moviesList = filterMovies(movies, userQuery, shortMoviesCheckbox);
    if (moviesList.length === 0) {
      setNotFoundMovies(true);
    } else {
      setNotFoundMovies(false);
    }
    setInitialMovies(moviesList);
    setFilteredMovies(
      shortMoviesCheckbox ? filterShortMovies(moviesList) : moviesList
    );
    localStorage.setItem(
      `${currentUser.email} - movies`,
      JSON.stringify(moviesList)
    );
  }
  const handleSearchSubmit = (inputValue) => {
    localStorage.setItem(`${currentUser.email} - movieSearch`, inputValue);
    localStorage.setItem(`${currentUser.email} - shortMovies`, isShort);

    if (isAllMovies.length === 0) {
      setIsLoader(true);
      moviesApi
        .getMovies()
        .then((movies) => {
          setIsAllMovies(movies);
          handleSetFilteredMovies(transformMovies(movies), inputValue, isShort);
        })
        .catch(() =>
          setErrors("Ошибка сервера")
        )
        .finally(() => setIsLoader(false));
    } else {
      handleSetFilteredMovies(isAllMovies, inputValue, isShort);
    }
  }

  const handleShortFilms = () => {
    setIsShort(!isShort);
    if (!isShort) {
      setFilteredMovies(filterShortMovies(initialMovies));
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem(`${currentUser.email} - shortMovies`, !isShort);
  }

  useEffect(() => {
    if (localStorage.getItem(`${currentUser.email} - shortMovies`) === "true") {
      setIsShort(true);
    } else {
      setIsShort(false);
    }
  }, [currentUser]);

  useEffect(() => {
    if (localStorage.getItem(`${currentUser.email} - movies`)) {
      const movies = JSON.parse(
        localStorage.getItem(`${currentUser.email} - movies`)
      );
      setInitialMovies(movies);
      if (
        localStorage.getItem(`${currentUser.email} - shortMovies`) === "true"
      ) {
        setFilteredMovies(filterShortMovies(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, [currentUser]);

  return (
    <Layout loggedIn={loggedIn}>
      <section className="Movies" id="Movies">
        <SearchForm
          isShort={isShort}
          handleSearchSubmit={handleSearchSubmit}
          handleShortFilms={handleShortFilms}
        ></SearchForm>
        {!NotFoundMovies ? (
          <MoviesCardList
            moviesList={filteredMovies}
            savedMoviesList={savedMoviesList}
            onLikeClick={onLikeClick}
            onDeleteClick={onDeleteClick}
          />
        ) : (
          <div className="constainer SavedMovies__NotFound">
            <p>Фильмы не найдены</p>
            {errors ? <p>{errors}</p> : null}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Movies;
