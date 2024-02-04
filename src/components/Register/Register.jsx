import React, { useState } from 'react'
import Logo from '../../images/logo.svg'
import { NavLink } from 'react-router-dom'
import InputBlock from '../Blocks/InputBlock/InputBlock'

function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')

  const [isEmailError, setIsEmailError] = useState(false)
  const [isPasswError, setIsPasswError] = useState(false)
  const [isNameError, setIsNameError] = useState(false)


  const validation = () => {
    setIsEmailError(false)
    setIsPasswError(false)
    setIsNameError(false)
    if (email === '') {
      setIsEmailError('E-mail не может быть пустым')
     }
    if (password.length < 7) {
      setIsPasswError('Пароль не может быть короче 7 символов')
    }
    if (password.length > 16) {
      setIsPasswError('Пароль не может быть больше 16 символов')
    }
    if (name < 2) {
      setIsNameError('Имя не может быть короче 2 символов')
    }
    if (name > 30) {
      setIsNameError('Имя не может быть больше 30 символов')
    }
  }

  return (
    <main className='Register' id='Register'>
      <section className="container Register_FullHeight">
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
                inputError={isNameError}
              />
              <InputBlock 
                inputID={"Register__FormEmail"} 
                inputName={"E-mail"} 
                inputType={"email"} 
                inputValue={email} 
                setInputValue={setEmail} 
                inputAutoComplite={"email"}
                inputError={isEmailError}
              />
              <InputBlock
                inputID={"Register__FormPassw"} 
                inputName={"Пароль"} 
                inputType={"password"} 
                inputValue={password} 
                setInputValue={setpassword} 
                inputAutoComplite={"new-password"}
                inputError={isPasswError}
              />
            </form>
            <div className="Register__ButtonsBlock">
              <button type='submit' className='Register__ButtonsBlockSignUpButton' onClick={() => validation()}>Зарегистрироваться</button>
              <div className='Register__BottomNavLinkBlock'>
                <p className='Register__BottomNavLinkPrompt'>Уже зарегистрированы?</p>
                <NavLink to='/signin' className='Register__BottomNavLink'>Войти</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Register