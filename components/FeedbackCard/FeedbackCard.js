import styles from "./FeedbackCard.module.css";
import classNames from "classnames";
import Author from "components/Author/Author";

const FeedbackCard = ({ className, title, avatar, logo, author, company, img }) => {
    return (
        <div className={classNames(className, styles.card)}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <span className={styles.quote}>“</span>
                    <p className={styles.title}>{title}</p>
                </div>
                <Author avatar={avatar} logo={logo} name={author} company={company} className={styles.author} />
            </div>
            <div className={styles.imgWrapper}>
                <img src={img} className={styles.img} />
            </div>
        </div>
    );
};

export default FeedbackCard;
