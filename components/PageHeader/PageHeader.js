import React from "react";
import styles from "./PageHeader.module.css";
import classNames from "classnames";
import Link from "next/link";

const PageHeader = ({ title, link, className, linkTitle }) => {
    return (
        <div className={classNames(className, styles.container)}>
            <h1 className={styles.title}>{title}</h1>
            {link && (
                <Link href={link}>
                    <p className={styles.link}>{linkTitle}</p>
                </Link>
            )}
        </div>
    );
};

export default PageHeader;
