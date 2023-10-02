import styles from "./StageCard.module.css";
import classNames from "classnames";
import CustomMarkdown from "components/CustomMarkdown/CustomMarkdown";
import Image from "next/image";

interface IStageCard {
    content: string;
    img?: string;
    className?: string;
}

const StageCard = ({ className, img, content }: IStageCard) => {
    return (
        <div className={classNames(styles.card, className)}>
            <div className={styles.imageWrapper}>
                {img && (
                    <Image
                        className={styles.image}
                        src={img}
                        loading="lazy"
                        layout="fill"
                        placeholder="blur"
                        blurDataURL={img}
                        alt={img}
                    />
                )}
            </div>
            <CustomMarkdown source={content} className={styles.content} />
        </div>
    );
};

export default StageCard;
