import React from "react";
import styles from "./FeedbackSection.module.css";
import classNames from "classnames";
import SectionHeader from "components/SectionHeader/SectionHeader";

const FeedbackSection = ({ list, className }) => {
    return (
        <div className={classNames(className, styles.container)}>
            <SectionHeader title="Отзывы" />
            <div className={styles.list}>
                {list?.map((item) => (
                    <div key={item.id} className={styles.cardWrapper}>
                        <div key={item.id} className={styles.card}>
                            <div className={styles.content}>
                                <div className={styles.text}>
                                    <span className={styles.quote}>“</span>
                                    <span className={styles.title}>{item.header}</span>
                                </div>
                            </div>
                            <div className={styles.imgWrapper}>
                                <img src={item.img} className={styles.img} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeedbackSection;
