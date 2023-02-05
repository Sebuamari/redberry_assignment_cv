import ButtonStyle from "../styles/layout/Button.module.scss";

const Button = ({
    text
}) => {
    return (
        <button className={ButtonStyle.button}>
            {text}
        </button>
    )
}

export default Button;