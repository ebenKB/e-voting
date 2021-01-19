import Styles from"./button.module.css";

const Button  = ({ text, isSelected = false, handleAction, type="cta"}) => {
    return (
        <button className={`${Styles[type]} ${isSelected && Styles.selected}`} onClick={handleAction}>{text}</button>
    )
}

export default Button;
