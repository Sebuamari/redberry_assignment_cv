import InputStyle from "../styles/layout/Input.module.scss";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { HiOutlineCalendar } from "react-icons/hi";
import { TiWarning } from "react-icons/ti";
import { useEffect, useState } from "react";

const DateInput = ({ target, label, placeholder, validationRule }) => {
  const [valid, setValid] = useState();
  const [value, setValue] = useState();

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
        type="date"
        onChange={(e) => setValue(e.target.value)}
        className={valid ? InputStyle.input + " " + InputStyle.validated : !valid && valid !== undefined ? InputStyle.input + " " + InputStyle.warning : InputStyle.input}
        placeholder={placeholder}
      />
      <HiOutlineCalendar className={InputStyle.calendar}/>
      <AiOutlineCheckCircle className={valid !== undefined && valid ? InputStyle.check_icon : InputStyle.hidden}/>
      <TiWarning className={valid || valid === null ? InputStyle.hidden : InputStyle.warning_icon} />
      <p className={InputStyle.validation_rule}>{validationRule}</p>
    </div>
  );
};

export default DateInput;