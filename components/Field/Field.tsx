import { useState } from "react";
import styles from "./Field.module.css";
import classNames from "classnames";

interface IField {
    name: "name" | "phone" | "amount";
    placeholder: string;
    value: string;
    onChange: (newValue: string) => void;
    helperText?: string | null;
    errorText?: string | null;
}

export const Field = ({ value, onChange, name, placeholder, helperText, errorText }: IField) => {
    return (
        <div>
            <input
                className={classNames("payform-tinkoff-row", styles.input)}
                type="text"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
            {(errorText || helperText) && (
                <span className={classNames(styles.helperText, { [styles.helperTextError]: errorText })}>
                    {errorText || helperText}
                </span>
            )}
        </div>
    );
};
