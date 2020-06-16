import React from "react";
import styles from "./Steps.module.css";
import classNames from "classnames";

const Steps = ({ className, list, current }) => {
    console.log("currentStep", current);

    return (
        <div className={classNames(styles.container, className)}>
            {list.map((step, index) => (
                <div key={index} className={classNames(styles.item, { [styles.currentItem]: current === index })}>
                    <div className={styles.index}>{current > index ? "✓" : index + 1}</div>
                    <span className={styles.title}>{step.title}</span>
                    <div className={classNames(styles.line, { [styles.lineActive]: current > index })}></div>
                </div>
            ))}
        </div>
    );
};

export default Steps;
