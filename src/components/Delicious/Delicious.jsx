//* COMPONENT
import Offers from "../Offers/Offers";

//* STYLES
import css from "./Delicious.module.css";

function Delicious() {
  return (
    <div className={css.overlay}>
      <div className={`${css.deliciousSections} ${css.container}`}>
        <h1 className={css.deliciousTitle}>Explore Our Alowishus</h1>
        <p className={css.deliciousDescriptions}>
          A drink from the ‘My Alowishus’ bottled brews range OR grab one of our
          delicious coffee’s.
        </p>
        <Offers />
      </div>
    </div>
  );
}
export default Delicious;
