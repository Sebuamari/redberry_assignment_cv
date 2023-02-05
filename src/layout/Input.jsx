import InputStyle from "../styles/layout/Input.module.scss";


const Input = ({ target, label, placeholder, validationRule }) => {
  return (
    <div
      className={
        target === "name" || target === "surname"
          ? InputStyle.input_container + " " + InputStyle.input_container_width
          : InputStyle.input_container
      }
    >
      <label for={target}>{label}</label>
      <input
        id={target}
        name={target}
        className={InputStyle.input}
        placeholder={placeholder}
      />
      <p className={InputStyle.validation_rule}>{validationRule}</p>
    </div>
  );
};

export default Input;