import { useCallback, useEffect, useRef, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import useNotification from "../../hooks/useNotification";
import Layout from "../Layout/Layout";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Menu from "../Menu/Menu";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Registr from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as  mainApi from "../../utils/mainApi";
import * as  moviesApi from "../../utils/moviesApi";
import { ERROR_MESSAGE, MOVIES_URL, OK_MESSAGE, REQ_ERROR_MESSAGE, SUCCES_UPDATE_MESSAGE } from "../../utils/constants";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [isSideMenuOpen, setSideMenuStatus] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isPreloaderActive, setPreloaderClass] = useState(true);
  const aboutOnClickRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useNotification();

  async function handleUserUpdate({ email, name }) {
    setLoading(true);
    try {
      const userData = await mainApi.updateUser( name, email);
      if (userData) {
        setCurrentUser(userData);
        dispatch({
          type: "SUCCESS",
          title: OK_MESSAGE,
          message: SUCCES_UPDATE_MESSAGE,
        });
      }
    } catch (err) {
      dispatch({
        type: "ERROR",
        title: ERROR_MESSAGE,
        message: `${err}`,
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleUserRegistration({ password, email, name }) {
    setLoading(true);
    try {
      const userData = await mainApi.createUser( name, email, password );
      if (userData) {
        handleUserAuthorization({ email, password });
        navigate("/movies", { replace: true });
      }
    } catch (err) {
      dispatch({
        type: "ERROR",
        title: ERROR_MESSAGE,
        message: `${err}`,
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleUserAuthorization({ email, password }) {
    setLoading(true);
    try {
      const userData = await mainApi.login( email, password );
      if (userData) {
        if (userData.token) {
          localStorage.setItem("jwt", userData.token);
          setLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      }
    } catch (err) {
      dispatch({
        type: "ERROR",
        title: ERROR_MESSAGE,
        message: `${err}`,
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleUserLogOut() {
    try {
      
        setLoggedIn(false);
        setCurrentUser({});
        setSavedCards([]);
        localStorage.clear();
        navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
    }
  }

  const handleUserLoginCheck = useCallback(async () => {
    try {
      const userData = await mainApi.getUserInfo();
      if (userData) {
        setLoggedIn(true);
        setCurrentUser(userData);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setPreloaderClass(false);
    }
  }, []);

  async function handleGetAllMovies() {
    setLoading(true);
    try {
      const moviesData = await moviesApi.getCards();
      if (moviesData) {
        return moviesData;
      }
    } catch (err) {
      dispatch({
        type: "ERROR",
        title: ERROR_MESSAGE,
        message: REQ_ERROR_MESSAGE,
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const handleGetUserMoviesCards = useCallback(async () => {
    try {
      const moviesData = await mainApi.getSavedMovies();
      if (moviesData) {
        setSavedCards(moviesData);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  async function handleSaveMovie(movie) {
    try {
      const data = {
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${MOVIES_URL}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${MOVIES_URL}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }
      const movieData = await mainApi.addNewMovie(data);
      if (movieData) {
        setSavedCards([movieData, ...savedCards]);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDeleteMovie(movie) {
    const savedMovie = savedCards.find(
      (card) => card.movieId === movie.id || card.movieId === movie.movieId
    );
    try {
      const data = await mainApi.deleteMovie(savedMovie._id);
      if (data) {
        setSavedCards((state) =>
          state.filter((card) => card._id !== savedMovie._id)
        );
      }
    } catch (err) {
      dispatch({
        type: "ERROR",
        title: ERROR_MESSAGE,
        message: `${err}`,
      });
      console.error(err);
    }
  }

  useEffect(() => {
    handleUserLoginCheck();
  }, [loggedIn, handleUserLoginCheck]);

  useEffect(() => {
    if (loggedIn) {
      handleGetUserMoviesCards();
    }
  }, [loggedIn, handleGetUserMoviesCards]);

  function handleOpenSideMenu() {
    setSideMenuStatus(!isSideMenuOpen);
  }

  function handleCloseSideMenu() {
    setSideMenuStatus(false);
  }

  return (
    <div className="app__content">
      {isPreloaderActive ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route
              path="/"
              element={
                <Layout
                  onHamburgerClick={handleOpenSideMenu}
                  loggedIn={loggedIn}
                />
              }
            >
              <Route
                path="/movies"
                element={
                  <ProtectedRoute
                    element={Movies}
                    savedCards={savedCards}
                    onSearch={handleGetAllMovies}
                    onCardSave={handleSaveMovie}
                    onCardDelete={handleDeleteMovie}
                    isLoading={isLoading}
                    loggedIn={loggedIn}
                  />
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute
                    element={SavedMovies}
                    savedCards={savedCards}
                    onCardDelete={handleDeleteMovie}
                    loggedIn={loggedIn}
                  />
                }
              />
              <Route index element={<Main aboutRef={aboutOnClickRef} />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    element={Profile}
                    onUpdateUser={handleUserUpdate}
                    onLogout={handleUserLogOut}
                    onLoading={isLoading}
                    loggedIn={loggedIn}
                  />
                }
              />
            </Route>
            <Route
              path="/signin"
              element={
                <Login
                  onLogin={handleUserAuthorization}
                  onLoading={isLoading}
                  loggedIn={loggedIn}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Registr
                  onRegistr={handleUserRegistration}
                  onLoading={isLoading}
                  loggedIn={loggedIn}
                />
              }
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Menu
            isSideMenuOpen={isSideMenuOpen}
            onClose={handleCloseSideMenu}
          />
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}

export default App;
