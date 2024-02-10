import React from 'react'
import SectionHeading from '../../Blocks/SectionHeading/SectionHeading'

function AboutProject() {
  return (
    <section className='AboutProject' id='AboutProject'>
        <div className="container">
            <SectionHeading>О проекте</SectionHeading>
            <div className="row AboutProjects_Description">
                <div className="col-6 AboutProject__FullWidth">
                    <h3 className='AboutProjects_DescriptionTitle'>Дипломный проект включал 5 этапов</h3>
                    <p className='AboutProjects_DescriptionText'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="col-6 AboutProject__FullWidth">
                    <h3 className='AboutProjects_DescriptionTitle'>На выполнение диплома ушло 5 недель</h3>
                    <p className='AboutProjects_DescriptionText'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="row AboutProjects_ProgressBarBlock">
                <div className="AboutProjects_ProgressBar">
                    <div className="AboutProjects_ProgressBarComplited">
                        <div className="AboutProjects_bar">
                            <p>1 неделя</p>
                        </div>
                        <p className="AboutProjects_BackEnd">Back-end</p>
                    </div>
                    <div className="AboutProjects_ProgressBarNotComplited">
                        <div className="AboutProjects_bar">
                            <p>4 недели</p>
                        </div>
                        <p className="AboutProjects_FrontEnd">Front-end</p>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutProject