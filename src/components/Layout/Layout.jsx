import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ onHamburgerClick, loggedIn }) {
  const location = useLocation();

  return (
    <>
      <Header onHamburgerClick={onHamburgerClick} loggedIn={loggedIn} />
      <Outlet />
      {location.pathname !== "/profile" && <Footer />}
    </>
  );
}

export default Layout;
