//* DEFAULT BUTTON
import Button from "../Button/Button";

//* STYLES
import css from "./Order.module.css";

function Order() {
  return (
    <div className={`${css.orderSection} ${css.container}`}>
      <img src="/src/assets/Order/order.png" alt="" width={630} />
      <div className={css.ordersInfo}>
        <h2 className={css.ordersTitle}>Order Your Favourite Coffee</h2>
        <p className={css.ordersDescription}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <Button value="Order Now" />
      </div>
    </div>
  );
}
export default Order;
