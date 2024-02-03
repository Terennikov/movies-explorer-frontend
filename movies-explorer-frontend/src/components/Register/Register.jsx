import React, { useState } from 'react'
import Logo from '../../images/logo.svg'
import { NavLink } from 'react-router-dom'
import InputBlock from '../Blocks/InputBlock/InputBlock'

function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [isError, setIsError] = useState(false)

  const sendError = () => {
    setIsError(false)
    setTimeout(() => {
      setIsError(true)
    }, 1000)
  }

  return (
    <section className='Register' id='Register'>
      <div className="container Register_FullHeight">
        <div className="Register__Wrap">
          <div className="Register__RegistrationBlock">
            <form className='Register_Form' id='Register_Form'>
              <div className="Register__LogoBlock">
                <NavLink to='/'><img src={Logo} className="Logo" alt="Логотип" /></NavLink>
              </div>
              <h1 className='Register__Title'>Добро пожаловать!</h1>
              <InputBlock
                inputID={"Register__FormName"} 
                inputName={"Имя"} 
                inputType={"text"} 
                inputValue={name} 
                setInputValue={setName} 
                inputAutoComplite={"name"}
              />
              <InputBlock 
                inputID={"Register__FormEmail"} 
                inputName={"E-mail"} 
                inputType={"email"} 
                inputValue={email} 
                setInputValue={setEmail} 
                inputAutoComplite={"email"}
              />
              <InputBlock
                inputID={"Register__FormPassw"} 
                inputName={"Пароль"} 
                inputType={"password"} 
                inputValue={password} 
                setInputValue={setpassword} 
                inputAutoComplite={"new-password"}
                inputError={isError}
              />
              {isError ? (<p className='Register__Error'>Что-то пошло не так...</p>) : null}
            </form>
            <div className="Register__ButtonsBlock">
              <button className='Register__ButtonsBlockSignUpButton' onClick={() => sendError()}>Зарегистрироваться</button>
              <div className='Register__BottomNavLinkBlock'>
                <p className='Register__BottomNavLinkPrompt'>Уже зарегистрированы?</p>
                <NavLink to='/signin' className='Register__BottomNavLink'>Войти</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register