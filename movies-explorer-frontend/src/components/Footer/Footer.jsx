import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='Footer' id='Footer'>
        <div className="container">
            <div className="Footer_Author">
                <p className="Footer_Author_Text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            </div>
            <div className="Footer_BottomContent">
                <h4 className="Footer_BottomContentYear">© 2020</h4>
                <div className="Footer_BottomRightContent">
                    <Link
                        className="Footer_BottomContentYandexPracticum"
                        to="https://github.com/h1ze"
                        target="_blank"
                    >
                        Яндекс.Практикум
                    </Link>
                    <Link
                        className="Footer_BottomContentGitLink"
                        to="https://github.com/Terennikov"
                        target="_blank"
                    >
                        Github
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer