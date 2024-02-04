import React from 'react';
import SectionHeading from '../../Blocks/SectionHeading/SectionHeading';
import { Link } from 'react-router-dom';
import student from '../../../images/student.png';

const AboutMe = () => {
  return (
    <section className="about-me" id="AboutMe">
      <div className="container">
        <SectionHeading>Студент</SectionHeading>
        <div className="about-me__columns">
          <div className="about-me__text-column">
            <h3 className="about-me__title">Виталий</h3>
            <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__info">
              Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
              экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю
              слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
              После того, как прошёл курс&nbsp;по <br />веб-разработке, начал
              заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
            </p>
            <p className="about-me__info768">
              Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
              экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю
              слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. <br /> С 2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
              После того, как прошёл курс&nbsp;по веб-разработке, начал
              заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
            </p>
            <p className="about-me__info320">
              Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
              экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю
              слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. 
              С 2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
              После того, как прошёл курс&nbsp;по <br />веб-разработке, начал
              заниматься <br />фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
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
      </div>
    </section>
  );
};

export default AboutMe;