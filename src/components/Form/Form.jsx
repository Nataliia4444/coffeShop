//* DEFAULT BUTTON
import Button from "../Button/Button";

//* STYLES
import css from "./Form.module.css";
function Form() {
  return (
    <form className={css.footerForm}>
      <span className={css.formTitle}> First One’s On Us!</span>
      <input type="text" placeholder="E-mail" className={css.formInput}></input>
      <Button value="Subscribe" />
    </form>
  );
}
export default Form;
