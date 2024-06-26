import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";

function Main({ aboutRef }) {
  return (
    <main className="main">
      <Promo aboutRef={aboutRef} />
      <AboutProject aboutRef={aboutRef} />
      <Techs />
      <AboutMe />
    </main>
  );
}

export default Main;
