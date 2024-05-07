import CardProduct from "../../components/CardProduct/CardProduct";
import css from "./basket.module.css";

function Basket({ basketData, basket }) {
  console.log(basketData);
  console.log(basket);

  return (
    <div className={css.container}>
      <h2>BASKET</h2>
      {basket ? (
        <ul className={css.productList}>
          {basketData.map(({ price, id, title, description }) => {
            return (
              <CardProduct
                price={price}
                description={description}
                key={id}
                title={title}
                id={id}
              />
            );
          })}
        </ul>
      ) : (
        <div className={css.basketDefault}>
          <h1 className={css.titleDefault}> The basket is empty</h1>
        </div>
      )}
    </div>
  );
}
export default Basket;
