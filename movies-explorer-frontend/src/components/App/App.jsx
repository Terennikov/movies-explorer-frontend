import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main'; //
import Movies from '../Movies/Movies'; //
import SavedMovies from '../SavedMovies/SavedMovies'; //
import Register from '../Register/Register';
import Login from '../Login/Login'; //
import Profile from '../Profile/Profile'; //
import NotFound from '../NotFound/NotFound'; //
import Layout from '../Layout/Layout'; // //
// import movies from '../../utils/movies'; //
// import savedMovies from '../../utils/savedMovies'; //
import Preloader from '../Blocks/Preloader/Preloader'; //

function App() {
  // const [cards, setCards] = useState([]);
  // const [savedCards, setSavedCards] = useState([]);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading] = useState(false);

  // const menuOpenHandler = () => {
  //   setIsMenuOpen(true);
  // };

  // const menuCloseHandler = () => {
  //   setIsMenuOpen(false);
  // };

  // useEffect(() => {
  //   setCards(movies);
  //   setSavedCards(savedMovies);
  //   setIsLoading(false);
  // }, []);

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Layout />}> 
        {/* onMenuClick={menuOpenHandler} */}
        </Route>
        <Route index element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/saved-movies"
          element={<SavedMovies />}
        />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {isLoading && <Preloader />} 
    </div>
  );
}

export default App;