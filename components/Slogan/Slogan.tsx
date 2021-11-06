import React from "react";
import styles from "./Slogan.module.css";

const Slogan = ({ title, key }) => {
    return (
        <div className={styles.container} key={key}>
            <h4 className={styles.title}>{title}</h4>
        </div>
    );
};

export default Slogan;
