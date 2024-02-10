import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Menu from "../Blocks/Menu/Menu";

function Layout({ loggedIn, children, isDisableFooter }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setIsMenuOpen(true);
  };

  const menuCloseHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="Layout" id="Layout">
      <Header isSignIn={loggedIn} menuOpenHandler={menuOpenHandler}></Header>
      <main className="Layout__PageContent">{children}</main>
      {isDisableFooter ? null : <Footer></Footer>}
      <Menu isMenuOpen={isMenuOpen} closed={menuCloseHandler} />
    </div>
  );
}

export default Layout;
