import styles from "./Button.module.css";
import classNames from "classnames";
import { ReactNode } from "react";

interface IButton {
    children: ReactNode;
    className?: string;
    onClick: () => void;
    color?: "default" | "primary";
    disabled?: boolean;
    fullWidth?: boolean;
}

const Button = ({ className, onClick, color = "default", disabled, fullWidth, children }: IButton) => (
    <button
        className={classNames(
            styles.button,
            // { [styles.contained]: variant === "contained" },
            { [styles.primary]: color === "primary" },
            { [styles.disabled]: disabled },
            { [styles.fullWidth]: fullWidth },
            className
        )}
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>
);

export default Button;
