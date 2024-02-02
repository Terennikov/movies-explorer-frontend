import React from 'react'
import SectionHeading from '../../Blocks/SectionHeading/SectionHeading'

function Techs() {
  return (
    <section className='Techs' id='Techs'>
        <div className="container">
            <SectionHeading>Технологии</SectionHeading>
            <div className="Techs_Content">
                <h1 className="Techs_Title">7 технологий</h1>
                <p className="Techs_Description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className="Techs_Stak grid">
                    <h4 className="Techs_Stak_Tile Techs_StakTileFirst">HTML</h4>
                    <h4 className="Techs_Stak_Tile">CSS</h4>
                    <h4 className="Techs_Stak_Tile">JS</h4>
                    <h4 className="Techs_Stak_Tile">React</h4>
                    <h4 className="Techs_Stak_Tile">Git</h4>
                    <h4 className="Techs_Stak_Tile">Express.js</h4>
                    <h4 className="Techs_Stak_Tile Techs_StakTileLast">mongoDB</h4>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Techs