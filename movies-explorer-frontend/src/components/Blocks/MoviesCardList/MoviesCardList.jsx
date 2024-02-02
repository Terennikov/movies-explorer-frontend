import React from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({movies, isMovieSaved, searchQuery}) {

  return (
    <section className='MoviesCardList' id='MoviesCardList'>
        <div className="container">
            <div className="MoviesCardList_Wraper">
                {isMovieSaved 
                ? 
                (
                    movies.map(
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
                    movies.map(
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