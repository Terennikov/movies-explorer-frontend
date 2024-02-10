import React from 'react'
import Promo from './Promo/Promo'
import AboutProject from './AboutProject/AboutProject'
import Techs from './Techs/Techs'
import AboutMe from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio'
import Layout from '../Layout/Layout'

function Main({loggedIn}) {
  return (
      <Layout loggedIn={loggedIn}>
        <section className='Main' id='Main'>
        <Promo></Promo>
        <AboutProject></AboutProject>
        <Techs></Techs>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
        </section>
      </Layout>
  )
}

export default Main