import styles from "./Segment.module.css";
import Button from "components/Button/Button";

const Segment = ({ title, description, children, icon, link }) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}></div>
                </div>
                <p className={styles.title}>{title}</p>
                <div className={styles.list}>
                    {children?.map((item, index) => (
                        <div className={styles.listItem} key={index}>
                            <div className={styles.listIcon}></div>
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
                {typeof description === "string" ? (
                    <p className={styles.description}>{description}</p>
                ) : (
                    description.map((item, index) => (
                        <li key={index} className={styles.description}>
                            {item}
                        </li>
                    ))
                )}
            </div>
            <div className={styles.buttonWrapper}>{link && <Button title="Подробнее" className={styles.button} />}</div>
        </div>
    );
};

export default Segment;
