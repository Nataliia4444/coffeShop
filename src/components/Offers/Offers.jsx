//* DEFAULR BUTTON
import Button from "../Button/Button";

//* STYLES
import css from "./Offers.module.css";

function Offers() {
  return (
    <div>
      <ul className={css.cardsList}>
        <li className={`${css.card} ${css.kenburnsTop}`}>
          <h1 className={css.cardsTitle}>Our Catering</h1>
          <p className={css.cardsDescription}>
            Alowishus Catering, delicious drop off Catering
          </p>
          <img
            className={css.cardsImage}
            src="/src/assets/Offers/food.png"
            alt=""
            width={150}
          />
          <Button value="Menu ->" />
        </li>
        <li className={css.card}>
          {" "}
          <h1 className={css.cardsTitle}>The Food</h1>
          <p className={css.cardsDescription}>
            Our entire menu is available as dine in or takeaway.
          </p>
          <img
            className={css.cardsImage}
            src="/src/assets/Offers/fast-food.png"
            alt=""
            width={150}
          />
          <Button value="Menu ->" />
        </li>
        <li className={css.card}>
          {" "}
          <h1 className={css.cardsTitle}>The Gelato</h1>
          <p className={css.cardsDescription}>
            Life is like GELATO, enjoy it before it melts.
          </p>
          <img
            className={css.cardsImage}
            src="/src/assets/Offers/ice-cream.png"
            alt=""
            width={150}
          />
          <Button value="Menu ->" />
        </li>
      </ul>
    </div>
  );
}
export default Offers;
