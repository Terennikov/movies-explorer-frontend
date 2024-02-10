import React from 'react'
import SectionHeading from '../../Blocks/SectionHeading/SectionHeading'

function Techs() {
  return (
    <section className='Techs' id='Techs'>
        <div className="techs__container">
        <div className="container">
            <SectionHeading>Технологии</SectionHeading>
            <div className="Techs_Content">
                <h3 className="Techs_Title">7 технологий</h3>
                <p className="Techs_Description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="Techs_Stak grid">
                    <li className="Techs_Stak_Tile Techs_StakTileFirst">HTML</li>
                    <li className="Techs_Stak_Tile">CSS</li>
                    <li className="Techs_Stak_Tile">JS</li>
                    <li className="Techs_Stak_Tile">React</li>
                    <li className="Techs_Stak_Tile">Git</li>
                    <li className="Techs_Stak_Tile">Express.js</li>
                    <li className="Techs_Stak_Tile Techs_StakTileLast">mongoDB</li>
                </ul>
            </div>
        </div>
        </div>

    </section>
  )
}

export default Techs