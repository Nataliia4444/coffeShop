import CardProduct from "../../components/CardProduct/CardProduct";
import css from "./basket.module.css";
function Basket({ basketData }) {
  //   console.log(ListId);

  return (
    <div className={css.container}>
      <h2>BASKET</h2>
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
    </div>
  );
}
export default Basket;
