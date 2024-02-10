import React from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <section className='Portfolio' id='Portfolio'>
        <div className="container">
            <h3 className='Portfolio_Title'>Портфолио</h3>
            <ul className='portfolio__links'>
                <li>
                <Link className="Link"
                to="https://github.com/Terennikov/how-to-learn"
                target="_blank">
                    <div className='Portfolio_Link'>
                        <h2 className='Portfolio_Link_Title'>Статичный сайт</h2>
                        <h2 className='Portfolio_Link_Arrow'>↗</h2>
                    </div>
                </Link>
                </li>
                <li>    
                <Link className="Link"
                to="https://github.com/Terennikov/russian-travel"
                target="_blank">
                    <div className='Portfolio_Link'>
                        <h2 className='Portfolio_Link_Title'>Адаптивный сайт</h2>
                        <h2 className='Portfolio_Link_Arrow'>↗</h2>
                    </div>
                </Link>
                </li>
                <li>
                <Link className="Link"
                to="https://github.com/Terennikov/react-mesto-auth"
                target="_blank">
                    <div className='Portfolio_Link Portfolio_LinkLast'>
                        <h2 className='Portfolio_Link_Title'>Одностраничное приложение</h2>
                        <h2 className='Portfolio_Link_Arrow'>↗</h2>
                    </div>
            </Link>
                </li>
            </ul>
            
        </div>
    </section>
  )
}

export default Portfolio