import React, { useEffect } from 'react'
import Logo from '../../images/logo.svg'
import { NavLink } from 'react-router-dom'
import InputBlock from '../Blocks/InputBlock/InputBlock'
import useFormWithValidation from '../../hooks/useFormValidation';

function Register({error, handleRegister}) {

  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();


  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(values);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

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
                input_id={"Register__FormName"} 
                input_name={"Имя"} 
                input_type={"text"} 
                input_value={values.name || ''}  
                onChange={handleChange}  
                input_auto_complite={"name"}
                input_error={errors.name}
                minLength="2"
                maxLength="30"
                pattern="^[A-Za-zА-Яа-яЁё \s]+$"
                input_name_eng={"name"}
                required
              />
              <InputBlock 
                input_id={"Register__FormEmail"} 
                input_name={"E-mail"} 
                input_type={"email"} 
                input_value={values.email || ''}  
                onChange={handleChange} 
                input_auto_complite={"email"}
                input_error={errors.email}
                input_name_eng={"email"}
                required
              />
              <InputBlock
                input_id={"Register__FormPassw"} 
                input_name={"Пароль"} 
                input_type={"password"} 
                input_value={values.email || ''}  
                onChange={handleChange} 
                input_error={errors.password}
                input_name_eng={"password"}
                required
              />
            </form>
            <div className="Register__ButtonsBlock">
            {error ? <span className='Login__Button_Top_Error'>{error}</span> : null}
              <button disabled={!isValid} type='submit' className='Register__ButtonsBlockSignUpButton' onClick={(e) => handleSubmit(e)}>Зарегистрироваться</button>
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