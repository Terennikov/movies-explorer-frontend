import React from 'react'
import LandingLogo from '../../../images/landing-logo.svg'

function Promo() {
  return (
    <section className='Promo' id='Promo'>
        <div className="container">
            <div className="row spb Promo_Row">
                <div className='Promo_Text'>
                    <h1 className='Promo_TopText1280'>Учебный проект студента<br/>факультета <br/>Веб-разработки.</h1>
                    <h1 className='Promo_TopText768'>Учебный проект студента факультета Веб-разработки.</h1>
                    <p className='Promo_BottomText1280'>Листайте ниже, чтобы узнать больше про этот <br />проект и его создателя.</p>
                    <p className='Promo_BottomText768'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <a href="#AboutProject"><button className='Promo_MoreButton'><p>Узнать больше</p></button></a>
                </div>
                <div className="Promo_LandingLogoBlock">
                  <img className="Promo_LandingLogo" src={LandingLogo} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Promo