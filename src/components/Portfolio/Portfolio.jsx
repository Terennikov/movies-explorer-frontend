function Portfolio() {
  return (
    <div className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            className="portfolio__link hover-link"
            href="https://github.com/Terennikov/how-to-learn/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-text">Статичный сайт</p>
            <p className="portfolio__link-symbol">&#x2197;</p>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link hover-link"
            href="https://github.com/Terennikov/russian-travel/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <p className="portfolio__link-symbol">&#x2197;</p>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link hover-link"
            href="https://github.com/Terennikov/react-mesto-auth/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <p className="portfolio__link-symbol">&#x2197;</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
