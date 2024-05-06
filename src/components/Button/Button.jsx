import css from "./Button.module.css";
function Button({ value }) {
  return <button className={css.btn}>{value}</button>;
}

export default Button;
