//* DATA MENU
import menuData from "../../Data/Data";

//* COMPONENTS
import CardProduct from "../CardProduct/CardProduct";
import css from "./Menu.module.css";

function Menu() {
  return (
    <div className={`${css.menuSection} ${css.container}`}>
      <h2 className={css.menuTitle}>Best Selling Coffee</h2>
      <p className={css.menuDescription}>
        A drink from the ‘My Alowishus’ bottled brews range OR grab one of our
        delicious coffee’s.
      </p>
      <ul className={css.productList}>
        {menuData.map(({ price, id, title, description }) => {
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
export default Menu;
