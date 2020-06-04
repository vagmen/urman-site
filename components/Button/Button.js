import styles from "./Button.module.css";
import classNames from "classnames";

const Button = ({ className, title, onClick }) => {
    return (
        <button className={classNames(styles.button, className)} onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;
