import styles from "./FaqList.module.css";
import classNames from "classnames";
import { IFaqList } from "interfaces";

const FaqList = ({ list = [], className }: IFaqList) =>
    list.length > 0 ? (
        <div className={classNames(styles.container, className)}>
            {list.map((item) => (
                <details key={item.id} className={styles.item}>
                    <summary className={styles.question}>{item.question}</summary>
                    <div className={styles.answer}>{item.answer}</div>
                </details>
            ))}
        </div>
    ) : (
        <></>
    );

export default FaqList;
