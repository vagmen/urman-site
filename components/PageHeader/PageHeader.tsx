import React from "react";
import styles from "./PageHeader.module.css";
import classNames from "classnames";

interface IPageHeader {
    title?: React.ReactNode;
    // title?: string;
    subTitle?: string;
    className?: string;
    align?: "start" | "center";
}

const PageHeader = ({ title, subTitle, className, align = "start" }: IPageHeader) => {
    return (
        <div className={classNames(styles.container, { [styles.alignCenter]: align === "center" }, className)}>
            {title && <h1 className={styles.title}>{title}</h1>}
            {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
        </div>
    );
};

export default PageHeader;
