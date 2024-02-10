import React, { useContext, useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../../hooks/useFormValidation";

function Profile({ succes, error, handleSignOut, handleProfile, loggedIn }) {
  const [isEdit, setIsEdit] = useState(false);

  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);

  const handleSubmit =(e) => {
    e.preventDefault();
    handleProfile(values);
  }

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  let requirementValidity = (!isValid || (currentUser.name === values.name && currentUser.email === values.email));

  return (
      <Layout isDisableFooter={true} loggedIn={loggedIn}>
        <section className="Profile" id="Profile">
        <div className="container Profile__FullHeight">
          <div className="Profile__Content">
            <h1 className="Profile__ContentWelcome">Привет, {currentUser.name || ''}</h1>

            <form className="Profile__UserData">
              <div className="Profile__InputBlockWithError Profile__InputBlockWithErrorName">
                <div className="Profile__UserDataName">
                    <p className="Profile__UserDataText">Имя</p>
                    <input
                      type="text"
                      className="Profile__UserDataInput"
                      value={values.name || ''}
                      disabled={!isEdit}
                      onChange={(e) => handleChange(e)}
                      placeholder="Имя"
                      minLength="2"
                      maxLength="30"
                      pattern="^[A-Za-zА-Яа-яЁё \s]+$"
                      required
                      name="name"
                    />
                    
                  </div>
                  <span className="Login__TextError Profile__TextError">{errors.name || ''}</span>
              </div>
              <div className="Profile__InputBlockWithError">
                <div className="Profile__UserDataEmail">
                    <p className="Profile__UserDataText">E-mail</p>
                    <input
                      type="text"
                      className="Profile__UserDataInput"
                      value={values.email || ''}
                      disabled={!isEdit}
                      onChange={(e) => handleChange(e)}
                      placeholder="E-mail"
                      required
                      name="email"
                    />
                  </div>
                  <span className="Login__TextError Profile__TextError">{errors.email || ''}</span>
              </div>
                
            </form>

            <div className="Profile__BottomButtons">
              {!isEdit ? (
                <div className="Profile__BottomButtonsEditAndOut">
                  {succes ? (<p className="Profile__BottomEditSucces">{succes}</p>) : null }
                  <p
                    className="Profile__BottomButtonEdit"
                    onClick={() => setIsEdit(true)}
                  >
                    Редактировать
                  </p>
                  
                  <p className="Profile__BottomButtonSignOut" onClick={handleSignOut}>
                    Выйти из аккаунта
                  </p>
                  
                  
                </div>
              ) : (
                <div className="Profile__BottomButtonEditSaveBlock">
                  {error ? (<p className="Profile__BottomEditError">{error}</p>) : null }
                  <button
                  type="button"
                    className={`Profile__BottomButtonEditSave`}
                    disabled={requirementValidity ? true : false}
                    onClick={(e) => handleSubmit(e)}
                  >
                    Сохранить
                  </button>
                  
                </div>
              )}
            </div>
          </div>
        </div>
        </section>
      </Layout>
  );
}

export default Profile;
