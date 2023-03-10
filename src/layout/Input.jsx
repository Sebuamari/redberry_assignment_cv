import InputStyle from "../styles/layout/Input.module.scss";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { TiWarning } from "react-icons/ti";
import { useEffect, useState } from "react";

const Input = ({ target, label, placeholder, validationRule }) => {
  const [valid, setValid] = useState();
  const [value, setValue] = useState();

  const validateName = () => {
    const regex = /^[ა-ჰ]+$/
    if(value && value.length >= 2 && regex.test(value)) {
        setValid(true);
      } else {
        setValid(false);
      }
  }

  useEffect(() => {
    console.log(value);
    value !== undefined ? validateName() : console.log("no");
  }, [value]);

  return (
    <div
      className={
        target === "name" || target === "surname"
          ? InputStyle.input_container + " " + InputStyle.input_container_width
          : InputStyle.input_container
      }
    >
      <label htmlFor={target}>{label}</label>
      <input
        id={target}
        name={target}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        className={valid ? InputStyle.input + " " + InputStyle.validated : !valid && valid !== undefined ? InputStyle.input + " " + InputStyle.warning : InputStyle.input}
        placeholder={placeholder}
      />
      <p className={InputStyle.validation_rule}>{validationRule}</p>
      <AiOutlineCheckCircle className={valid !== undefined && valid ? InputStyle.check_icon : InputStyle.hidden}/>
      <TiWarning className={valid || valid === undefined ? InputStyle.hidden : InputStyle.warning_icon} />
    </div>
  );
};

export default Input;