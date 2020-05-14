import React from "react";
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
                {/* <h2>Кто мы?</h2>
                <ol className={styles.weList}>
                    <li>Десукция отражает подзол. При равных условиях потускула экспериментально верифицируема.</li>
                    <li>Десукция отражает подзол. При равных условиях потускула экспериментально верифицируема.</li>
                    <li>Десукция отражает подзол. При равных условиях потускула экспериментально верифицируема.</li>
                    <li>Десукция отражает подзол. При равных условиях потускула экспериментально верифицируема.</li>
                </ol> */}
            </div>
            <div className={styles.stat}>
                <div className={styles.statGrid}>
                    {statistics.map((item) => (
                        <>
                            <div className={styles.statNumber} key={"count-" + item.id}>
                                <span>{item.count}</span>
                            </div>
                            <div className={styles.statText} key={"description-" + item.id}>
                                <span>{item.description}</span>
                            </div>
                        </>
                    ))}
                    {/* <div className={styles.statNumber}>
                        <span>331</span>
                    </div>
                    <div className={styles.statText}>
                        <span>Разработано и согласовано проектов освоения леса</span>
                    </div>
                  */}
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

// We.getInitialProps = async function () {
//     const res = await fetch(API_URL + "/statistikas");
//     const data = await res.json();
//     console.log("data", data);

//     const statistics = data.map((item) => ({
//         id: item.id,
//         count: item.count,
//         text: item.text,
//     }));

//     return {
//         statistics,
//     };
// };

export default We;
