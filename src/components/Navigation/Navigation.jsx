import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation({isMainRoute, location}) {
  return (
    <nav className='Navigation'>
        <div className={`Navigation_Btns ${isMainRoute ? 'Navigation_BtnsWhite' : 'Navigation_BtnsBlack'}`}>
            <NavLink to='/movies' className={`Navigation_navBtnMovies ${location ==='/movies' ? 'Navigation_navBtnMoviesActive' : ''}`}>Фильмы</NavLink>
            <NavLink to='/saved-movies' className={`Navigation_navBtnMovies ${location ==='/saved-movies' ? 'Navigation_navBtnMoviesActive' : ''}`}>Сохранённые фильмы</NavLink>
        </div>
    </nav>
  )
}

export default Navigation