import React from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <section className='Portfolio' id='Portfolio'>
        <div className="container">
            <h3 className='Portfolio_Title'>Портфолио</h3>
            <Link className="Link"
                to="https://github.com/h1ze"
                target="_blank">
                    <div className='Portfolio_Link'>
                        <h1 className='Portfolio_Link_Title'>Статичный сайт</h1>
                        <h1 className='Portfolio_Link_Arrow'>↗</h1>
                    </div>
            </Link>
            <Link className="Link"
                to="https://github.com/h1ze"
                target="_blank">
                    <div className='Portfolio_Link'>
                        <h1 className='Portfolio_Link_Title'>Адаптивный сайт</h1>
                        <h1 className='Portfolio_Link_Arrow'>↗</h1>
                    </div>
            </Link>
            <Link className="Link"
                to="https://github.com/h1ze"
                target="_blank">
                    <div className='Portfolio_Link Portfolio_LinkLast'>
                        <h1 className='Portfolio_Link_Title'>Одностраничное приложение</h1>
                        <h1 className='Portfolio_Link_Arrow'>↗</h1>
                    </div>
            </Link>
            
        </div>
    </section>
  )
}

export default Portfolio