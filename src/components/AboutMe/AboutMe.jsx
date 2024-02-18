import student from "../../images/student.png";
import SectionTitle from "../SectionTitle/SectionTitle";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {

  return (
    <section className="about-me">
      <SectionTitle title="Студент" />
      <article className="about-me__bio">
        <h3 className="about-me__name">Даниил</h3>
        <p className="about-me__profession">
          Фронтенд-разработчик, 28 лет
        </p>
        <p className="about-me__text">
              Я&nbsp;родился и&nbsp;живу в&nbsp;Пскове, закончил юридический 
              факультет ПсковГУ. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь 
              футболом, умею играть на форепьяно. Недавно начал кодить. С&nbsp;2015
              года работал в&nbsp;городской админситрации,а также имею статус ИП. 
              После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься 
              фриланс-заказами и&nbsp;искать&nbsp;постоянную работу в it сфере.
        </p>
        <a
          className="about-me__link hover-link"
          href="https://github.com/Terennikov"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <img
          className="about-me__img"
          src={student}
          alt="Фотография разработчика"
        />
      </article>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
