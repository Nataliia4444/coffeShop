import css from "./Error.module.css";
function Error() {
  return (
    <>
      <h1>404 Error Page #2</h1>
      <p className={css.zoomArea}>
        <b>CSS</b> animations to make a cool 404 page.{" "}
      </p>
      <section className={css.errorContainer}>
        <span className={css.four}>
          <span className={css.screenReaderText}>4</span>
        </span>
        <span className={css.zero}>
          <span className={css.screenReaderText}>0</span>
        </span>
        <span className={css.four}>
          <span className={css.screenReaderText}>4</span>
        </span>
      </section>
      <div className={css.linkContainer}>
        <a
          target="_blank"
          href="https://www.silocreativo.com/en/creative-examples-404-error-css/"
          className={css.moreLink}
        >
          Visit the original article
        </a>
      </div>
    </>
  );
}
export default Error;
