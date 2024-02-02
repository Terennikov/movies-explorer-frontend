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
    <section className='SavedMovies' id='SavedMovies'>
      <Layout>
        <SearchForm isShort={setIsShort}></SearchForm>
        <MoviesCardList movies={movies} searchQuery={""} isMovieSaved={true}/>
      </Layout>
    </section>
  )
}

export default SavedMovies