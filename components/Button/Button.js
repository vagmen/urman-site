import styles from "./Button.module.css";
import classNames from "classnames";

const Button = ({ className, title, onClick, variant = "contained", color = "default", disabled, fullWidth }) => {
    return (
        <button
            className={classNames(
                styles.button,
                { [styles.contained]: variant === "contained" },
                { [styles.primary]: color === "primary" },
                { [styles.disabled]: disabled },
                { [styles.fullWidth]: fullWidth },
                className
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {title}
        </button>
    );
};

export default Button;
