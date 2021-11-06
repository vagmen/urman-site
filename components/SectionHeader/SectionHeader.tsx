import React from "react";
import styles from "./SectionHeader.module.css";
import classNames from "classnames";
import CustomLink from "components/CustomLink/CustomLink";

interface ISectionHeaderProps {
    title: string;
    link?: string;
    className?: string;
    linkTitle?: string;
    description?: string;
}

const SectionHeader = ({ title, link, className, linkTitle, description }: ISectionHeaderProps) => (
    <>
        <div className={classNames(className, styles.container)}>
            <h2>{title}</h2>
            {link && <CustomLink href={link}>{linkTitle}</CustomLink>}
        </div>
        <p className={styles.description}>{description}</p>
    </>
);

export default SectionHeader;
