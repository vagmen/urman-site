import React, { useState } from "react";
import styles from "./CustomMarkdown.module.css";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

const imageRenderer = (props) => <img className="post-img" {...props} />;

const linkRenderer = (props) => {
    const parts = props.href.split("urman.su");
    const isInsiteLink = parts.length > 1 && props.href.indexOf("urman.su") !== -1;
    const title =
        (props.children && props.children[0] && props.children[0].props && props.children[0].props.value) || "";
    return isInsiteLink ? (
        <Link href={parts.pop()} passHref>
            <a className="post-a" href="">
                {title}
            </a>
        </Link>
    ) : (
        <a className="post-a" href={props.href} target="_blank" rel="noopener noreferrer">
            {title}
        </a>
    );
};

const renderers = {
    image: imageRenderer,
    link: linkRenderer,
};

const CustomMarkdown = ({ source, className, withPadding }) => {
    return (
        <div className={classNames(styles.container, className, { [styles.padding]: withPadding })}>
            <ReactMarkdown source={source} renderers={renderers} />
        </div>
    );
};

export default CustomMarkdown;
