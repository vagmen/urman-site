import React from "react";
import styles from "./PageHeader.module.css";
import classNames from "classnames";

const PageHeader = ({ title, subTitle, className }) => {
    return (
        <div className={classNames(styles.container, className)}>
            <h1 className={styles.title}>{title}</h1>
            {subTitle && <h2 className={styles.subTitle}>{subTitle}</h2>}
        </div>
    );
};

export default PageHeader;
