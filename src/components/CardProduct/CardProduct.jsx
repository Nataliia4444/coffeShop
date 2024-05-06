//* DEFAULT BUTTON
import Button from "../Button/Button";

//* STYLES
import css from "./CardProduct.module.css";

//* CARD PRODUCT FROM THE MENU
function CardProduct({ price, description, title, id }) {
  return (
    <li className={`${css.cardProduct} ${css.scaleInCenter}`} id={id}>
      <img
        className={css.cardImageProduct}
        src="/src/assets/Menu/menu.png"
        alt=""
        width={168}
      />
      <div className={css.priceWrapper}>
        <h1 className={css.cardsTitle}>{title}</h1>
        <p className={css.cardPrice}>{price}$</p>
      </div>

      <div className={css.descWrapper}>
        <p className={css.cardsDescription}>{description}</p>
      </div>
      <div className={css.cardsBtn}>
        <Button value="Order now" className={css.cardsBtn} />
      </div>
    </li>
  );
}

export default CardProduct;
