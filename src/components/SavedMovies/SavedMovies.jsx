import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import SearchForm from '../Blocks/SearchForm/SearchForm';
import MoviesCardList from '../Blocks/MoviesCardList/MoviesCardList';
import movies from '../../utils/movies'

function SavedMovies() {

  const [isShort, setIsShort] = useState(false)

  useEffect(()=> {
    console.log(isShort);
  }, [isShort])

  return (
      <Layout>
        <section className='SavedMovies' id='SavedMovies'>
        <SearchForm isShort={setIsShort}></SearchForm>
        <MoviesCardList movies={movies} searchQuery={""} isMovieSaved={true}/>
        </section>
      </Layout>
  )
}

export default SavedMovies