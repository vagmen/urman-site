import styles from "./StageCard.module.css";
import classNames from "classnames";
import CustomMarkdown from "components/CustomMarkdown/CustomMarkdown";
import Image from "next/image";

const StageCard = ({ className, image, content }) => {
    return (
        <div className={classNames(styles.card, className)}>
            <div className={styles.imageWrapper}>
                <Image
                    className={styles.image}
                    src={image}
                    loading="lazy"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={image}
                    alt={image}
                />
            </div>
            <CustomMarkdown source={content} className={styles.content} />
        </div>
    );
};

export default StageCard;
