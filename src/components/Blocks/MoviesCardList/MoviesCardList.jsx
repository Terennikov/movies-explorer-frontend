import { React, useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import useScreenWidth from "../../../hooks/useScreenWidth";
import { getSavedMovieCard } from "../../../utils/utils.js";
import { DEVICE_PARAMS } from "../../../utils/constants.js";


function MoviesCardList({
  moviesList,
  savedMoviesList,
  onLikeClick,
  onDeleteClick,
}) {
  const screenWidth = useScreenWidth();
  const { desktop, tablet, mobile } = DEVICE_PARAMS;
  const [isMount, setIsMount] = useState(true);
  const [showMovieList, setShowMovieList] = useState([]);
  const [cardsShowDetails, setCardsShowDetails] = useState({
    total: 12,
    more: 3,
  });

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/movies") {
      if (screenWidth > desktop.width) {
        setCardsShowDetails(desktop.cards);
      } else if (screenWidth <= desktop.width && screenWidth > mobile.width) {
        setCardsShowDetails(tablet.cards);
      } else {
        setCardsShowDetails(mobile.cards);
      }
      return () => setIsMount(false);
    }
  }, [screenWidth, isMount, desktop, tablet, mobile, location.pathname]);

  useEffect(() => {
    if (moviesList.length) {
      const res = moviesList.filter((item, i) => i < cardsShowDetails.total);
      setShowMovieList(res);
    }
  }, [moviesList, cardsShowDetails.total]);

  const handleClickMoreMovies = () => {
    const start = showMovieList.length;
    const end = start + cardsShowDetails.more;
    const additional = moviesList.length - start;

    if (additional > 0) {
      const newCards = moviesList.slice(start, end);
      setShowMovieList([...showMovieList, ...newCards]);
    }
  }

  return (
    <section
      className={`MoviesCardList ${
        location.pathname === "/saved-movies" ? "FullHeightMovies" : ""
      }`}
      id="MoviesCardList"
    >
      <div className="container MoviesCardList_Container">
        <ul className="MoviesCardList_Wraper">
          {showMovieList.map((movie) =>
            
              <MoviesCard
                key={movie.id || movie._id}
                saved={getSavedMovieCard(savedMoviesList, movie)}
                onLikeClick={onLikeClick}
                onDeleteClick={onDeleteClick}
                movie={movie}
              />
          )}
        </ul>
      </div>
      {location.pathname === "/movies" ? (<div className="container">
        <div className="Movies_LoadMoreBlock">
          <button type="button" className="Movies_LoadMoreButton" onClick={handleClickMoreMovies}>
            Еще
          </button>
        </div>
      </div>) : null}
      
    </section>
  );
}

export default MoviesCardList;
