import React from "react";
import LikeActive from "../../../images/like_active.svg";
import Like from "../../../images/like.svg";
import Delete from "../../../images/delete.svg";

import { Link, useLocation } from "react-router-dom";
import { transformDuration } from "../../../utils/utils.js";

function MoviesCard({ movie, saved, onLikeClick, onDeleteClick }) {
  const location = useLocation();

  const handleDeleteClick = () => {
    onDeleteClick(movie);
  };
  const handleLikeClick = () => {
    onLikeClick(movie);
  };

  return (
    <li className="MoviesCard">
      <div className="MoviesCard__MainData">
        <Link to={movie.trailerLink} target="_blank" className="MoviesCard__TrailerImg">
          <img
            className="MoviesCard__Img"
            src={movie.image}
            alt={movie.nameRU}
            title={`Описание: ${movie.description} \n\nСнято: ${movie.country} ${movie.year}г.`}
          />
        </Link>
        <div className="MoviesCard__NameAndSaved">
          <h2 className="MoviesCard__Name">{movie.nameRU}</h2>
          {location.pathname === '/saved-movies' ? (
            <button type="button" className="MoviesCard__SavedButton">
              <img className="MoviesCard__Delete" src={Delete} alt="Удалить" onClick={handleDeleteClick}/>
            </button>
          ) : saved ? (
            <button type="button" className="MoviesCard__SavedButton">
              <img
                src={LikeActive}
                alt="Активный Лайк"
                className="MoviesCard__SavedActive"
                onClick={handleDeleteClick}
              />
            </button>
          ) : (
            <button type="button" className="MoviesCard__SavedButton">
              <img
                src={Like}
                alt="Лайк"
                className="MoviesCard__Saved"
                onClick={handleLikeClick}
              />
            </button>
          )}
        </div>
      </div>
      <p className="MoviesCard__Duration">{transformDuration(movie.duration)}</p>
    </li>
  );
}

export default MoviesCard;
