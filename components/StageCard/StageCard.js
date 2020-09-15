import styles from "./StageCard.module.css";
import classNames from "classnames";
import Author from "components/Author/Author";
import CustomMarkdown from "components/CustomMarkdown/CustomMarkdown";

const StageCard = ({ className, image, content }) => {
    return (
        <div className={classNames(styles.card, className)}>
            <img className={styles.image} src={image} loading="lazy" />
            <CustomMarkdown source={content} className={styles.content} />
        </div>
    );
};

export default StageCard;
