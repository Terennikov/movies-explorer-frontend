import { React, useEffect, useState } from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import { useLocation } from 'react-router-dom'

function MoviesCardList({movies, isMovieSaved, searchQuery}) {

  const [moviesCrop, setMoviesCrop] = useState([])
  const location = useLocation()

  
  useEffect(() => {

    let windowInnerWidht = window.innerWidth
    console.log(windowInnerWidht);

    let moviesSl = []

    if (windowInnerWidht < 768) {
        for(let i = 0; i<5; i++) {
            moviesSl.push(movies[i])
        }
    }
    else if ((windowInnerWidht >= 768) && (windowInnerWidht < 1280)) {
        for(let i = 0; i<8; i++) {
            moviesSl.push(movies[i])
        }
    }
    else {
        moviesSl.push(...movies)
    }

    setMoviesCrop(moviesSl)
  }, [movies]);

  return (
    <section className={`MoviesCardList ${ location.pathname === '/saved-movies' ? 'FullHeightMovies' : ''}`} id='MoviesCardList'>
        <div className="container MoviesCardList_Container">
            <div className="MoviesCardList_Wraper">
                {isMovieSaved 
                ? 
                (
                    moviesCrop.map(
                        (movie) => movie.saved ? 
                            <MoviesCard 
                                key={movie.id} 
                                imgsrc={movie.link} 
                                name={movie.name} 
                                isSaved={movie.saved} 
                                duration={movie.duration}
                                isMovieSaved={isMovieSaved}
                            />
                        : 
                            null
                    )
                ) : (
                    moviesCrop.map(
                        (movie) => 
                            <MoviesCard 
                                key={movie.id} 
                                imgsrc={movie.link} 
                                name={movie.name} 
                                isSaved={movie.saved} 
                                duration={movie.duration}
                                isMovieSaved={isMovieSaved}
                            />
                    )
                )}
            </div>
        </div>
    </section>
  )
}

export default MoviesCardList