import React from "react";
import styles from "./SectionHeader.module.css";
import classNames from "classnames";
import Link from "next/link";

const SectionHeader = ({ title, link, className, linkTitle }) => {
    return (
        <div className={classNames(className, styles.container)}>
            <h2 className={styles.title}>{title}</h2>
            {link && (
                <Link href={link}>
                    <p className={styles.link}>{linkTitle}</p>
                </Link>
            )}
        </div>
    );
};

export default SectionHeader;
