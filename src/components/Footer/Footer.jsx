//* STYLES
import css from "./Footer.module.css";

function Footer() {
  return (
    <div className={css.border}>
      <footer className={`${css.footerSection} ${css.container}`}>
        <p>Copytright © 2022 Alowishus Delicious</p>
        <p>Terms of Use | Privacy Policy</p>
      </footer>
    </div>
  );
}
export default Footer;
