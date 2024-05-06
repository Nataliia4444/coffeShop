//* NAVIGATION
import Navigation from "../Navigation/Navigation";

//* STYLES
import css from "./Header.module.css";
function Header() {
  return (
    <>
      <header className={css.headerSection}>
        <div className={css.border}>
          <div className={`${css.headerContainer} ${css.container}`}>
            <img
              src="/src/image/Logo/image 2.png"
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
