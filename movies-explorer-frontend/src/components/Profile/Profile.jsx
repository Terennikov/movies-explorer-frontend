import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";

function Profile() {
  const [name, setName] = useState("Виталий");
  const [email, setEmail] = useState("pochta@yandex.ru");
  const [isEdit, setIsEdit] = useState(false);
  const [isErrorEdit, setIsErrorEdit] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  const sendData = () => {
    setIsErrorEdit(false)
    setIsErrorOpen(false)
    setTimeout(()=> {
      setIsErrorEdit("При обновлении профиля произошла ошибка.");
      setIsErrorOpen(true)
    }, 1000)
  };

  useEffect(() => {
    setIsErrorOpen(false)
  }, [name, email]);

  return (
    <section className="Profile" id="Profile">
      <Layout isDisableFooter={true}>
        <div className="container Profile__FullHeight">
          <div className="Profile__Content">
            <h1 className="Profile__ContentWelcome">Привет, Виталий!</h1>

            <div className="Profile__UserData">
              <div type="text" className="Profile__UserDataName">
                <p className="Profile__UserDataText">Имя</p>
                <input
                  type="text"
                  className="Profile__UserDataInput"
                  value={name}
                  disabled={!isEdit}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div type="text" className="Profile__UserDataEmail">
                <p className="Profile__UserDataText">E-mail</p>
                <input
                  type="text"
                  className="Profile__UserDataInput"
                  value={email}
                  disabled={!isEdit}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="Profile__BottomButtons">
              {!isEdit ? (
                <div className="Profile__BottomButtonsEditAndOut">
                  <p
                    className="Profile__BottomButtonEdit"
                    onClick={() => setIsEdit(true)}
                  >
                    Редактировать
                  </p>
                  <p className="Profile__BottomButtonSignOut">
                    Выйти из аккаунта
                  </p>
                </div>
              ) : (
                <div className="Profile__BottomButtonEditSaveBlock">
                  {isErrorEdit ? (<p className="Profile__BottomEditError">{isErrorEdit}</p>) : null }
                  <button
                    className={`Profile__BottomButtonEditSave`}
                    disabled={isErrorOpen ? true : false}
                    onClick={() => sendData()}
                  >
                    Сохранить
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}

export default Profile;
