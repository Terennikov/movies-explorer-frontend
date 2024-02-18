import Overlay from "../Overlay/Overlay";
import AccountLink from "../AccountLink/AccountLink";
import Navigation from "../Navigation/Navigation";

function Menu({ isSideMenuOpen, onClose }) {
  return (
    <Overlay isActive={isSideMenuOpen} onClose={onClose}>
      <div
        className={`menu ${
          isSideMenuOpen ? "menu_active" : ""
        }`}
      >
        <button
          className="menu__btn-close hover-button"
          type="button"
          aria-label="Закрыть меню"
          onClick={onClose}
        ></button>
        <Navigation isSideMenu={true} onClose={onClose} />
        <AccountLink isSideMenu={true} onClose={onClose} />
      </div>
    </Overlay>
  );
}

export default Menu;
