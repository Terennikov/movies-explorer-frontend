import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import SearchForm from '../Blocks/SearchForm/SearchForm'
import MoviesCardList from '../Blocks/MoviesCardList/MoviesCardList'
import movies from '../../utils/movies'

function Movies() {
  
  const [isShort, setIsShort] = useState(false)

  useEffect(()=> {
    console.log(isShort);
  }, [isShort])

  return (
      <Layout>
        <section className='Movies' id='Movies'>
          <SearchForm isShort={setIsShort} ></SearchForm>
          <MoviesCardList movies={movies} searchQuery={""} isMovieSaved={false}/>
            <div className="container">
              <div className='Movies_LoadMoreBlock'>
                <button type='button' className='Movies_LoadMoreButton'>Еще</button>
              </div>
            </div>
            </section>
      </Layout>

  )
}

export default Movies