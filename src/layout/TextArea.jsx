import TextAreaStyle from "../styles/layout/TextArea.module.scss";


const TextArea = ({ target, label, placeholder }) => {
  return (
    <div className={TextAreaStyle.textarea_container} >
      <label for={target}>{label}</label>
      <textarea
        id={target}
        name={target}
        className={TextAreaStyle.textarea}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;