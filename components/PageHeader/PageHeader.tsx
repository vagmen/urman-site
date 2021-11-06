import React from "react";
import styles from "./PageHeader.module.css";
import classNames from "classnames";

interface IPageHeader {
    title: string;
    subTitle?: string;
    className?: string;
}

const PageHeader = ({ title, subTitle, className }: IPageHeader) => {
    return (
        <div className={classNames(styles.container, className)}>
            <h1 className={styles.title}>{title}</h1>
            {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
        </div>
    );
};

export default PageHeader;
