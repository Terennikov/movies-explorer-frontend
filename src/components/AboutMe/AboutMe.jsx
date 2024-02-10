import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Link } from 'react-router-dom';
import student from '../../images/student.png';
import Portfolio from '../Portfolio/Portfolio';
import('./AboutMe.css');

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__wrapper">
        <SectionHeading>Студент</SectionHeading>
        <div className="about-me__columns">
          <div className="about-me__text-column">
            <h3 className="about-me__title">Даниил</h3>
            <p className="about-me__subtitle">Фронтенд-разработчик, 28 лет</p>
            <p className="about-me__info">
              Я&nbsp;родился и&nbsp;живу в&nbsp;Пскове, закончил юридический 
              факультет ПсковГУ. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь 
              футболом, умею играть на форепьяно. Недавно начал кодить. С&nbsp;2015
              года работал в&nbsp;городской админситрации,а также имею статус ИП. 
              После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься 
              фриланс-заказами и&nbsp;искать&nbsp;постоянную работу в it сфере.
            </p>
            <Link
              className="about-me__link"
              to="https://github.com/Terennikov"
              target="_blank"
            >
              Github
            </Link>
          </div>
          <div className="about-me__photo-column">
            <img
              className="about-me__photo"
              src={student}
              alt="Фотография студента"
            />
          </div>
        </div>
        <Portfolio />
      </div>
    </section>
  );
};

export default AboutMe;