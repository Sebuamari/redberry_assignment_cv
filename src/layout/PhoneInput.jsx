import InputStyle from "../styles/layout/Input.module.scss";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { TiWarning } from "react-icons/ti";
import { useEffect, useState } from "react";

const PhoneInput = ({ target, label, placeholder, validationRule }) => {
  const [valid, setValid] = useState();
  const [value, setValue] = useState();
  
  const validatePhone = () => {
    //validate phone number to be Georgian
    const phoneValidationRegex = /^\+995[0-9]{9}$/;
     if( value.test(phoneValidationRegex) ){
        setValid(true);
     } else {
        setValid(false);
     }
  }

  return (
    <div className={InputStyle.input_container}>
      <label htmlFor={target}>{label}</label>
      <input
        id={target}
        name={target}
        type="number"
        onChange={(e) => setValue(e.target.value)}
        className={valid ? InputStyle.input + " " + InputStyle.validated : !valid && valid !== undefined ? InputStyle.input + " " + InputStyle.warning : InputStyle.input}
        placeholder={placeholder}
      />
      <AiOutlineCheckCircle className={valid !== undefined && valid ? InputStyle.check_icon : InputStyle.hidden}/>
      <TiWarning className={valid || valid === null ? InputStyle.hidden : InputStyle.warning_icon} />
      <p className={InputStyle.validation_rule}>{validationRule}</p>
    </div>
  );
};

export default PhoneInput;