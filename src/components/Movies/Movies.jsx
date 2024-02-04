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
    <section className='Movies' id='Movies'>
      <Layout>
          <SearchForm isShort={setIsShort} ></SearchForm>
          <MoviesCardList movies={movies} searchQuery={""} isMovieSaved={false}/>
            <div className="container">
              <div className='Movies_LoadMoreBlock'>
                <button className='Movies_LoadMoreButton'>Еще</button>
              </div>
            </div>
      </Layout>
    </section>

  )
}

export default Movies