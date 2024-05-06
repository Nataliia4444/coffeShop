//* REACT ROUTER DOM
import { NavLink } from "react-router-dom";

//* STYLES
import css from "./Navigation.module.css";

//*REACT ICON
import IconBasketFill from "../IconsReact/IconBasketFill";

function Navigation() {
  return (
    <div>
      <nav className={css.navHeader}>
        <NavLink to="/" className={css.navText}>
          Home
        </NavLink>
        <NavLink to="/menu" className={css.navText}>
          Cafe Menu
        </NavLink>
        <NavLink to="/about" className={css.navText}>
          About Us
        </NavLink>
        <NavLink to="/findUs" className={css.navText}>
          Find Us
        </NavLink>
        <NavLink to="/catering" className={css.navText}>
          Alowishus Catering
        </NavLink>
        <NavLink to="/basket" className={css.navBasket}>
          Basket
          <IconBasketFill />
        </NavLink>
      </nav>
    </div>
  );
}
export default Navigation;
