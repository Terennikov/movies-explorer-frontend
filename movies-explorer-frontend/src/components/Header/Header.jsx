import React  from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Navigation from '../Navigation/Navigation';

import Logo from '../../images/logo.svg'
import People_Icon from '../../images/people_icon_white.svg'
import People_Icon_Gray from '../../images/people_icon_gray.svg'
import MenuIcon from "../../images/burger-btn-icon.svg"
import MenuIconWhite from "../../images/burger-btn-icon-white.svg"

function Header({ isSignIn, menuOpenHandler }) {

    const location = useLocation()

  return (
    <header className={`header ${location.pathname === '/' ? 'header_Green': 'header_White'}`}>
        <div className="container">
            <div className="row">
                <div className="col-3">
                <NavLink to='/'><img src={Logo} alt="logo" /></NavLink>
                </div>
                <div className="col-6">
                    <div className="navBlock nav1280">
                        {!isSignIn ? null : 
                            (<Navigation location={location.pathname} isMainRoute={location.pathname === '/' ? true : false}></Navigation>)
                        }
                    </div>
                </div>
                <div className="col-3 flexend alc">

                    {isSignIn ? 
                        (
                            <div className="rightNavBlock flexend">
                                <NavLink to='/profile'><button 
                            className={`header_toProfileBtn nav1280 ${location.pathname === '/' ? 'header_toProfileBtnGreen' : 'header_toProfileBtnWhite'}`}>
                                Аккаунт 
                                {location.pathname === '/' ? (<img src={People_Icon} alt="People" />) : (<img src={People_Icon_Gray} alt="People" />)}
                                
                            </button></NavLink>
                            <button className='Header__menuBurger ' onClick={() => menuOpenHandler()}>
                            {location.pathname === '/' ? (<img src={MenuIconWhite} alt="Menu"/>)
                            :
                            (<img src={MenuIcon} alt="Menu"/>)}
                            </button>
                            </div>
                        )
                         : 
                        (<div className='signInUpBtns'>
                        <NavLink to='/signup'><p className={`signUp ${location.pathname !== '/' ? `signUpBlack`: null} `}>Регистрация</p></NavLink>
                        <NavLink to='/signup'><button className={`signIn`}>Войти</button></NavLink>
                    </div>)}
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header