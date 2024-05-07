//* DEFAULT BUTTON
import Button from "../Button/Button";

import image from "/src/image/Order/order.png";

//* STYLES
import css from "./Order.module.css";
import { NavLink } from "react-router-dom";

function Order() {
  return (
    <div className={css.overlay}>
      <div className={css.container}>
        <div className={css.orderSection}>
          <img src={image} alt="" width={640} className={css.orderImage} />
          <div className={css.orderInfo}>
            <h2 className={css.ordersTitle}>Order Your Favourite Coffee</h2>
            <p className={css.ordersDescription}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <NavLink to="/menu" className={css.navText}>
              <Button value="Order Now" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Order;
