import styles from "./Button.module.css";
import classNames from "classnames";

const Button = ({ className, title, onClick, variant = "contained", color = "default" }) => {
    return (
        <button
            className={classNames(
                styles.button,
                { [styles.contained]: variant === "contained" },
                { [styles.primary]: color === "primary" },
                className
            )}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;
