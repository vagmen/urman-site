import React, { useState } from "react";
import styles from "./YouTubePlayer.module.css";
import classNames from "classnames";
import ReactPlayer from "react-player";
import Image from "next/image";

function parseMediaURL(url) {
    let ids = url.split(".com/watch?v=");
    if (ids.length === 1) {
        ids = url.split("youtu.be/");
    }
    return ids.length > 0 ? ids[1] : null;
}

const YouTubePlayer = ({ className, url, alt }) => {
    const [clicked, setClicked] = useState(false);
    const id = parseMediaURL(url);

    return (
        <div className={classNames(styles.container, className)}>
            {clicked ? (
                <ReactPlayer url={url} width="100%" height="100%" className={styles.video} playing />
            ) : (
                <div onClick={() => setClicked(true)} className={styles.video}>
                    <Image
                        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                        className={styles.poster}
                        alt={alt || "Постер"}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                        layout="fill"
                    />
                    <svg width="68" height="48" viewBox="0 0 68 48" className={styles.button}>
                        <path
                            className={styles.buttonShape}
                            d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                        ></path>
                        <path className={styles.buttonIcon} d="M 45,24 27,14 27,34"></path>
                    </svg>
                </div>
            )}
        </div>
    );
};

export default YouTubePlayer;
