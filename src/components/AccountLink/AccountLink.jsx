import { Link, useLocation } from "react-router-dom";

function AccountLink({ isSideMenu, onClose }) {

const location = useLocation()

  return (
    <Link
      to="/profile"
      onClick={onClose}
      className={`account-link ${
        isSideMenu ? "account-link_place_side-menu" : "account-link_hidden"
      }
      ${
        location.pathname === "/" && !isSideMenu
        ? 'account-link__on-main'
        : ''
      } hover-button`}
    >
      Аккаунт
    </Link>
  );
}

export default AccountLink;
