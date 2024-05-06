//* NAVIGATION
import Navigation from "../Navigation/Navigation";
import image from "/src/image/Logo/image 2.png";

//* STYLES
import css from "./Header.module.css";
function Header() {
  return (
    <>
      <header className={css.headerSection}>
        <div className={css.border}>
          <div className={`${css.headerContainer} ${css.container}`}>
            <img
              src={image}
              alt=""
              width="126px"
              height="50px"
              className={css.headerLogo}
            />
            <Navigation />
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
