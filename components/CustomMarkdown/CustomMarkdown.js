import React from "react";
import styles from "./CustomMarkdown.module.css";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import VideoWrapper from "components/VideoWrapper/VideoWrapper";

const headingRenderer = (props) => {
    if (props.level === 1) {
        return <h1>{props.children}</h1>;
    }
    if (props.level === 2) {
        return <h2 className={styles.h2}>{props.children}</h2>;
    }
    if (props.level === 3) {
        return <h3 className={styles.h3}>{props.children}</h3>;
    }
    if (props.level === 4) {
        return <h4 className={styles.h4}>{props.children}</h4>;
    }
    if (props.level === 5) {
        return <h5 className={styles.h5}>{props.children}</h5>;
    }
    if (props.level === 6) {
        return <h6 className={styles.h6}>{props.children}</h6>;
    }
};

const imageRenderer = (props) => <img className="post-img" {...props} loading="lazy" />;

const linkRenderer = (props) => {
    // return (
    //     <a className="post-a" href={props.href} target="_blank" rel="noopener noreferrer">
    //         ''
    //     </a>
    // );

    const title = props?.children[0]?.props?.value || "";

    if (props.href.indexOf("youtube") !== -1) {
        return <VideoWrapper url={props.href} />;
    } else if (props.href[0] === "/") {
        return (
            <Link href={props.href} passHref>
                <a className="post-a" href="">
                    {title}
                </a>
            </Link>
        );
    } else {
        return (
            <a className="post-a" href={props.href} target="_blank" rel="noopener noreferrer">
                {title}
            </a>
        );
    }
    // const parts = props.href.split("urman.su");
    // const isInsiteLink = parts.length > 1 && props.href.indexOf("urman.su") !== -1;
    // const title =
    //     (props.children && props.children[0] && props.children[0].props && props.children[0].props.value) || "";
    // return isInsiteLink ? (
    //     <Link href={parts.pop()} passHref>
    //         <a className="post-a" href="">
    //             {title}
    //         </a>
    //     </Link>
    // ) : (
    //     <a className="post-a" href={props.href} target="_blank" rel="noopener noreferrer">
    //         {title}
    //     </a>
    // );
};

const renderers = {
    image: imageRenderer,
    link: linkRenderer,
    heading: headingRenderer,
};

const CustomMarkdown = ({ source, className, withPadding }) => {
    return (
        <div className={classNames(styles.container, className, { [styles.padding]: withPadding })}>
            <ReactMarkdown renderers={renderers}>{source}</ReactMarkdown>
        </div>
    );
};

export default CustomMarkdown;
