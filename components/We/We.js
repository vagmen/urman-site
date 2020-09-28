import React, { Fragment } from "react";
import styles from "./We.module.css";
import classNames from "classnames";
import ReactPlayer from "react-player";
import ReactMarkdown from "react-markdown";
import { TiTree } from "react-icons/ti";
// import { LiteYouTubeEmbed } from "react-lite-youtube-embed";
import YouTubePlayer from "components/YouTubePlayer/YouTubePlayer";

const We = ({ statistics, whoAreWe, benefits, className, video }) => {
    return (
        <div className={classNames(className, styles.we)}>
            <div className={styles.who}>
                <ReactMarkdown source={whoAreWe} />
            </div>
            <div className={styles.stat}>
                <div className={styles.statGrid}>
                    {statistics.map((item) => (
                        <Fragment key={"count-" + item.id}>
                            <div className={styles.statNumber}>
                                <span>{item.count}</span>
                            </div>
                            <div className={styles.statText}>
                                <span>{item.description}</span>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
            <div className={styles.playerWrapper}>
                <YouTubePlayer url={video || "https://www.youtube.com/watch?v=Vm9iiVhUU9U"} />
                {/* <ReactPlayer
                    url={video || "https://www.youtube.com/watch?v=Vm9iiVhUU9U"}
                    width="100%"
                    height="100%"
                    className={styles.video}
                /> */}
                {/* <LiteYouTubeEmbed id="Vm9iiVhUU9U" title="What’s new in Material Design for the web" /> */}
            </div>
            <div className={styles.benefits}>
                {benefits.map((benefit) => (
                    <div className={styles.benefit} key={"benefit" + benefit.id}>
                        <TiTree className={styles.benefitIcon} size={40} />
                        <p className={styles.benefitText}>{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default We;
