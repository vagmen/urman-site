import { useState } from "react";
import styles from "./Field.module.css";
import classNames from "classnames";

interface IField {
    name: "name" | "phone" | "amount";
    placeholder: string;
    value: string;
    onChange: (newValue: string) => void;
}

export const Field = ({ value, onChange, name, placeholder }: IField) => {
    // const [value, setValue] = useState("");

    return (
        <input
            className={classNames("payform-tinkoff-row", styles.input)}
            // className="payform-tinkoff-row"
            type="text"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={(event) => onChange(event.target.value)}
        />
    );
};
