import React from "react";
import styles from "./VideoWrapper.module.css";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import ReactPlayer from "react-player";

const VideoWrapper = ({ url, className, withPadding }) => {
    return (
        <div className={classNames(styles.playerWrapper, className, { [styles.padding]: withPadding })}>
            <ReactPlayer url={url} width="100%" height="100%" className={styles.video} />
        </div>
    );
};

export default VideoWrapper;
