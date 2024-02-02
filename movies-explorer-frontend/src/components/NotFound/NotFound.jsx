import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  return (
    <section className='NotFound' id='NotFound'>
      <div className="container Error_Content767">
        <div className="ErrorContainer">
          <h1 className='NotFound__ErrorStatusNum'>404</h1>
          <h4 className='NotFound__ErrorStatus'>Страница не найдена</h4>
        </div>
        <p className='NotFound__GoBackButton' onClick={() => navigate(-1)}>Назад</p>
      </div>
    </section>
  )
}

export default NotFound