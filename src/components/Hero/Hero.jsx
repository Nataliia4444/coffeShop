//* DEFAULT BUTTON
import Button from "../Button/Button";

//* STYLES
import css from "./Hero.module.css";

function Hero() {
  return (
    <main>
      <section className={`${css.hero} ${css.container}`}>
        <div className={css.heroInfo}>
          <h1 className={`${css.heroTitle} ${css.textShadowPopTop}`}>
            Alowishus Delicious Coffee{" "}
          </h1>
          <p className={css.heroDescription}>
            A drink from the ‘My Alowishus’ bottled brews range OR grab one of
            our delicious coffee’s.
          </p>
          <div className={css.heroOffers}>
            <Button value="Download App" />
            <a href="" className={css.heroShop}>
              Shop Coffee
            </a>
          </div>
        </div>
        <div>
          <img src="/src/assets/Hero/heroOverlay.png" alt="" />
        </div>
      </section>
    </main>
  );
}
export default Hero;
