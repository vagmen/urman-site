import React, { Fragment } from "react";
import styles from "./We.module.css";
import classNames from "classnames";
import ReactPlayer from "react-player";
import ReactMarkdown from "react-markdown";
import { MdCheckCircle } from "react-icons/md";

const We = ({ statistics, whoAreWe, benefits, className }) => {
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
            <div className={styles.video}>
                <ReactPlayer url="https://www.youtube.com/watch?v=2k_m5qGUgjg" width="auto" />
            </div>
            <div className={styles.benefits}>
                {benefits.map((benefit) => (
                    <div className={styles.benefit} key={"benefit" + benefit.id}>
                        <MdCheckCircle className={styles.benefitIcon} size={40} />
                        <p className={styles.benefitText}>{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default We;
