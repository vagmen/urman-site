import styles from "./Author.module.css";
import classNames from "classnames";

const Author = ({ name, company, avatar, logo, className }) => {
    return (
        <div className={classNames(styles.container, className)}>
            {(avatar || logo) && (
                <div className={styles.images}>
                    <img src={avatar || logo} className={styles.avatar} loading="lazy" />
                    {avatar && logo && <img src={logo} className={styles.logo} loading="lazy" />}
                </div>
            )}
            <div className={styles.text}>
                <p className={styles.name}>{name}</p>
                <span className={styles.company}>{company}</span>
            </div>
        </div>
    );
};

export default Author;
