import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import InputBlock from '../Blocks/InputBlock/InputBlock'
import Logo from '../../images/logo.svg'
import useFormWithValidation from '../../hooks/useFormValidation'

function Login({handleLogin, error}) {

  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

  

  const handleSubmit = (e) => {
    localStorage.setItem(`--loginEmail`, values.email);
    localStorage.setItem(`--loginPassword`, values.password);
    e.preventDefault();
    handleLogin(values);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <main className='Login' id='Login'>
      <section className="container Login__FullHeight">
        <div className="Login__Wrap">
          <div className="Login__RegistrationBlock">
            <form className='Login_Form' id='Login_Form' noValidate>
            <div className="Login__LogoBlock">
                <NavLink to='/'><img src={Logo} className="Logo" alt="Логотип" /></NavLink>
              </div>
              <h1 className='Login__Title'>Рады видеть!</h1>
              <InputBlock 
                input_id={"Login__FormEmail"} 
                input_name={"E-mail"} 
                input_type={"email"} 
                input_value={values.email || localStorage.getItem(`--loginEmail`) || ''} 
                onChange={handleChange} 
                input_auto_complite={"email"}
                input_name_eng={"email"}
                input_error={errors.email}
                required
              />
              
              <InputBlock
                input_id={"Login__FormPassw"} 
                input_name={"Пароль"} 
                input_type={"password"} 
                input_value={values.password || localStorage.getItem(`--loginPassword`) || ''} 
                onChange={handleChange} 
                input_auto_complite={"current-password"}
                input_name_eng={"password"}
                input_error={errors.password}
                required
              />
              
            </form>
            <div className="Login__ButtonsBlock">
              {error ? <span className='Login__Button_Top_Error'>{error}</span> : null}
              <button disabled={!isValid} type="submit" className='Login__ButtonsBlockSignInButton' onClick={(e) => handleSubmit(e)}>Войти</button>
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
