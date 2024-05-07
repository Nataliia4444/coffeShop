//* DEFAULT BUTTON
import Button from "../Button/Button";
import image from "/src/image/Menu/menu.png";

//* STYLES
import css from "./CardProduct.module.css";
// import { useState } from "react";

//* CARD PRODUCT FROM THE MENU
function CardProduct({ price, description, title, id, setListId, setBasket }) {
  function handleClick(id) {
    setListId((prev) => [...prev, id]);
    setBasket(true);
  }
  return (
    <li className={`${css.cardProduct} ${css.scaleInCenter}`} id={id}>
      <img className={css.cardImageProduct} src={image} alt="" width={168} />
      <div className={css.priceWrapper}>
        <h1 className={css.cardsTitle}>{title}</h1>
        <p className={css.cardPrice}>{price}$</p>
      </div>

      <div className={css.descWrapper}>
        <p className={css.cardsDescription}>{description}</p>
      </div>
      <div className={css.cardsBtn}>
        <Button
          value="Order now"
          className={css.cardsBtn}
          handleClick={() => handleClick(id)}
        />
      </div>
    </li>
  );
}

export default CardProduct;
