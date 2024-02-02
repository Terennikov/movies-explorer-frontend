import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation({isMainRoute, location}) {
  return (
    <nav className='Navigation'>
        <div className={`Navigation_Btns ${isMainRoute ? 'Navigation_BtnsWhite' : 'Navigation_BtnsBlack'}`}>
            <NavLink to='/movies'><p className={`Navigation_navBtnMovies ${location ==='/movies' ? 'Navigation_navBtnMoviesActive' : null}`}>Фильмы</p></NavLink>
            <NavLink to='/saved-movies'><p className={`Navigation_navBtnMovies ${location ==='/saved-movies' ? 'Navigation_navBtnMoviesActive' : null}`}>Сохранённые фильмы</p></NavLink>
        </div>
    </nav>
  )
}

export default Navigation