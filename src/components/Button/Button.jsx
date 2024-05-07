import css from "./Button.module.css";
function Button({ value, handleClick, id }) {
  return (
    <button className={css.btn} onClick={() => handleClick(id)}>
      {value}
    </button>
  );
}

export default Button;
