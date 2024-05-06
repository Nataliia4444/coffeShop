//* DEFAULT BUTTON
import Button from "../Button/Button";

//* STYLES
import css from "./Order.module.css";

function Order() {
  return (
    <div className={css.overlay}>
      <div className={css.container}>
        <div className={css.orderSection}>
          <img
            src="/src/assets/Order/order.png"
            alt=""
            width={640}
            className={css.orderImage}
          />
          <div className={css.orderInfo}>
            <h2 className={css.ordersTitle}>Order Your Favourite Coffee</h2>
            <p className={css.ordersDescription}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <Button value="Order Now" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Order;
