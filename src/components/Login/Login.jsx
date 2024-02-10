import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import InputBlock from '../Blocks/InputBlock/InputBlock'
import Logo from '../../images/logo.svg'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [isEmailError, setIsEmailError] = useState(false)
  const [isPasswError, setIsPasswError] = useState(false)


  // const sendError = () => {
  //   setIsError(false)
  //   setTimeout(() => {
  //     setIsError(true)
  //   }, 1000)
  // }
  const validation = () => {
    setIsEmailError(false)
    setIsPasswError(false)
    if (email === '') {
      setIsEmailError('E-mail не может быть пустым')
     }
    if (password.length < 7) {
      setIsPasswError('Пароль не может быть короче 7 символов')
    }
    if (password.length > 16) {
      setIsPasswError('Пароль не может быть больше 16 символов')
    }
  }
  return (
    <main className='Login' id='Login'>
      <section className="container Login__FullHeight">
        <div className="Login__Wrap">
          <div className="Login__RegistrationBlock">
            <form className='Login_Form' id='Login_Form'>
            <div className="Login__LogoBlock">
                <NavLink to='/'><img src={Logo} className="Logo" alt="Логотип" /></NavLink>
              </div>
              <h1 className='Login__Title'>Рады видеть!</h1>
              <InputBlock 
                inputID={"Login__FormEmail"} 
                inputName={"E-mail"} 
                inputType={"email"} 
                inputValue={email} 
                setInputValue={setEmail} 
                inputAutoComplite={"email"}
                inputError={isEmailError}
              />
              
              <InputBlock
                inputID={"Login__FormPassw"} 
                inputName={"Пароль"} 
                inputType={"password"} 
                inputValue={password} 
                setInputValue={setpassword} 
                inputAutoComplite={"current-password"}
                inputError={isPasswError}
              />
              
            </form>
            <div className="Login__ButtonsBlock">
              <button type="submit" className='Login__ButtonsBlockSignInButton' onClick={() => validation()}>Войти</button>
              <div className='Login__BottomNavLinkBlock'>
                <p className='Login__BottomNavLinkPrompt'>Ещё не зарегистрированы?</p>
                <NavLink to='/signup' className='Login__BottomNavLink'>Регистрация</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login