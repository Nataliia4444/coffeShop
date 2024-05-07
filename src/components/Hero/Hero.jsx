//* DEFAULT BUTTON
import Button from "../Button/Button";

import image from "/src/image/Hero/heroOverlay.png";

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
            <a href="/about" rel="noopener noreferrer">
              <Button value="Download App" />
            </a>

            <a href="/menu" className={css.heroShop} rel="noopener noreferrer">
              Shop Coffee
            </a>
          </div>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </section>
    </main>
  );
}
export default Hero;
