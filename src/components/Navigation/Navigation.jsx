import { Link, useLocation } from "react-router-dom";

function Navigation({ isSideMenu, onClose }) {
  const location = useLocation();

  return (
    <nav className={`navigation ${isSideMenu ? "" : "navigation_hidden"}`}>
      <ul
        className={`navigation__menu-wrapper ${
          isSideMenu ? "navigation__menu-wrapper_direction_column" : ""
        }`}
      >
        <li
          className={`navigation__menu-item ${
            isSideMenu ? "" : "navigation__menu-item_hidden"
          }`}
        >
          <Link
            to="/"
            onClick={onClose}
            className={`navigation__link ${
              isSideMenu ? "navigation__link_place_side-menu" : ""
            } ${
              location.pathname === "/" && isSideMenu
                ? "navigation__link_place_side-menu-active"
                : ""
            } hover-link`}
          >
            Главная
          </Link>
        </li>
        <li className="navigation__menu-item">
          <Link
            to="/movies"
            onClick={onClose}
            className={` ${
              isSideMenu ? "navigation__link_place_side-menu" : ""
            } ${
              location.pathname === "/movies" && !isSideMenu
                ? "navigation__link_place_header-active"
                : ""
            } ${
              location.pathname === "/movies" && isSideMenu
                ? "navigation__link_place_side-menu-active"
                : ""
            }
            ${
              location.pathname === "/" && !isSideMenu ? 'navigation__link'
               : 
               'navigation__link-black'
            } hover-link`}
          >
            Фильмы
          </Link>
        </li>
        <li className="navigation__menu-item">
          <Link
            to="/saved-movies"
            onClick={onClose}
            className={`navigation__link ${
              isSideMenu ? "navigation__link_place_side-menu" : ""
            } ${
              location.pathname === "/saved-movies" && !isSideMenu
                ? "navigation__link_place_header-active"
                : ""
            } ${
              location.pathname === "/saved-movies" && isSideMenu
                ? "navigation__link_place_side-menu-active"
                : ""
            }
            ${
              location.pathname === "/" && !isSideMenu ? 'navigation__link'
               : 
               'navigation__link-black'
            } hover-link`}
          >
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
