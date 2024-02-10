import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  return (
    <main className='NotFound' id='NotFound'>
      <div className="container Error_Content767">
        <div className="ErrorContainer">
          <h1 className='NotFound__ErrorStatusNum'>404</h1>
          <h2 className='NotFound__ErrorStatus'>Страница не найдена</h2>
        </div>
        <p className='NotFound__GoBackButton' onClick={() => navigate(-1)}>Назад</p>
        {/* Возвращение назад */}
      </div>
    </main>
  )
}

export default NotFound