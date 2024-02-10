import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Main from "../Main/Main"; 
import Movies from "../Movies/Movies"; 
import SavedMovies from "../SavedMovies/SavedMovies"; 
import Register from "../Register/Register";
import Login from "../Login/Login"; 
import Profile from "../Profile/Profile"; 
import NotFound from "../NotFound/NotFound"; 
import Preloader from "../Blocks/Preloader/Preloader"; 
import mainApi from "../../utils/MainApi.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const [load, setLoad] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMoviesList, setSavedMoviesList] = useState([]);

  const [logInErr, setLoginErr] = useState(false);
  const [regErr, setRegErr] = useState(false);
  const [profErr, setProfErr] = useState(false);
  const [profSucces, setProfSucces] = useState(false);

  const handleRegister = ({ name, email, password }) => {
    setIsLoading(true);
    mainApi
      .createUser(name, email, password)
      .then((data) => {
        if (data._id) {
          handleLogin({ email, password });
        }
      })
      .catch((err) => setRegErr(err))
      .finally(() => setIsLoading(false));
  };

  const handleLogin = ({ email, password }) => {
    setIsLoading(true);
    mainApi
      .login(email, password)
      .then((jwt) => {
        if (jwt.token) {
          localStorage.setItem("jwt", jwt.token);
          setLoggedIn(true);
          navigate("/movies");
        }
      })
      .catch((err) => setLoginErr(err))
      .finally(() => setIsLoading(false));
  };

  const handleProfile = ({ name, email }) => {
    setIsLoading(true);
    mainApi
      .updateUser(name, email)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        setProfSucces("Ваши данные обновлены!");
      })
      .catch((err) => setProfErr(err))
      .finally(() => setIsLoading(false));
  };

  const handleSignOut = () => {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.clear();
    navigate("/");
  };

  const handleSaveMovie = (movie) => {
    mainApi
      .addNewMovie(movie)
      .then((newMovie) => setSavedMoviesList([newMovie, ...savedMoviesList]))
      .catch((err) => console.log(err));
  };

  const handleDeleteMovie = (movie) => {
    const savedMovie = savedMoviesList.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId
    );
    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newMoviesList = savedMoviesList.filter((m) => {
          if (movie.id === m.movieId || movie.movieId === m.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setSavedMoviesList(newMoviesList);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    const path = location.pathname;
    if (jwt) {
      setIsLoading(true);
      mainApi
        .getUserInfo()
        .then((data) => {
          if (data) {
            setLoggedIn(true);
            setCurrentUser(data);
            navigate(path);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
          setLoad(true);
        });
    } else {
      setLoad(true);
    }
  }, [navigate, location.pathname]);

  useEffect(() => {
    if (loggedIn) {
      setIsLoading(true);
      mainApi
        .getUserInfo()
        .then((res) => setCurrentUser(res))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn && currentUser) {
      mainApi
        .getSavedMovies()
        .then((data) => {
          const UserMoviesList = data.filter(
            (m) => 
              m.owner === currentUser._id

          );
          setSavedMoviesList(UserMoviesList);
        })
        .catch((err) => console.log(err));
    }
  }, [currentUser, loggedIn]);


  const PrivateRoute = ({ children }) => {
    return !loggedIn ? children : <Navigate to={"/"} />;
  };

  const ProtectedRoute = ({ children }) => {
    return loggedIn ? children : <Navigate to={"/"} />;
  };

  return (
    <div className="page">
      {!load ? (
        <Preloader isOpen={isLoading} />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route index element={<Main loggedIn={loggedIn} />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute>
                  <Movies
                    loggedIn={loggedIn}
                    setIsLoader={setIsLoading}
                    savedMoviesList={savedMoviesList}
                    onLikeClick={handleSaveMovie}
                    onDeleteClick={handleDeleteMovie}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute>
                  <SavedMovies
                    loggedIn={loggedIn}
                    setIsLoader={setIsLoading}
                    savedMoviesList={savedMoviesList}
                    onDeleteClick={handleDeleteMovie}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile
                    error={profErr}
                    succes={profSucces}
                    loggedIn={loggedIn}
                    handleProfile={handleProfile}
                    handleSignOut={handleSignOut}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PrivateRoute>
                  <Register error={regErr} handleRegister={handleRegister} />
                </PrivateRoute>
              }
            />

            <Route
              path="/signin"
              element={
                <PrivateRoute>
                  <Login error={logInErr} handleLogin={handleLogin} />
                </PrivateRoute>
              }
            />

            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}

export default App;
