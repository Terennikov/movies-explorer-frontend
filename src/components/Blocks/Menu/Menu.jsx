import React from 'react'
import close from '../../../images/close.svg'
import People_Icon_Gray from '../../../images/people_icon_gray.svg'
import { NavLink, useLocation } from 'react-router-dom'

function Menu({isMenuOpen, closed}) {

    const location = useLocation()
  return (
    <section className={`Menu ${isMenuOpen ? 'Menu__Opened' : 'Menu__Closed'}`} id='Menu'>
        <div className="Menu_Block">
            <div className="Menu_CloseBlock">
                <button className='Menu_CloseButton' onClick={closed}><img src={close} alt="" /></button>
            </div>
            <div className="Menu__Content">
                <div className="Menu__TopButtons">
                    <NavLink to='/' className={`Menu__NavLink ${location.pathname === '/' ? 'Menu__NavLinkActive' : ''}`}>Главная</NavLink>
                    <NavLink to='/movies' className={`Menu__NavLink ${location.pathname === '/movies' ? 'Menu__NavLinkActive' : ''}`}>Фильмы</NavLink>
                    <NavLink to='/saved-movies' className={` Menu__NavLink ${location.pathname === '/saved-movies' ? 'Menu__NavLinkActive' : ''}`}>Сохранённые фильмы</NavLink>
                </div>
                <div className="Menu_BottomButtons">
                <NavLink to='/profile'
                            className={`header_toProfileBtn header_toProfileBtnWhite`}>
                                Аккаунт 
                                <img src={People_Icon_Gray} alt="Человек" />
                                
                            </NavLink>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu