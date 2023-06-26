import styles from "./FeedbackCard.module.css";
import classNames from "classnames";
import Author from "components/Author/Author";
import ReactPlayer from "react-player";
import Image from "next/image";

type FeedbackType = "video" | "recommendation" | "text";

interface IFeedbackCard {
    className?: string;
    title: string;
    avatar?: string;
    logo?: string;
    author?: string;
    company?: string;
    img?: string;
    type: FeedbackType;
    videoUrl?: string;
}

const FeedbackCard = ({ className, title, avatar, logo, author, company, img, type, videoUrl }: IFeedbackCard) => {
    const renderAuthor = () => (
        <Author avatar={avatar} logo={logo} name={author} company={company} className={styles.author} />
    );
    return (
        <div className={classNames(styles.card, { [styles.shadowCard]: type === "text", className })}>
            {type === "video" && (
                <div className={styles.playerWrapper}>
                    <ReactPlayer url={videoUrl} className={styles.video} width="100%" height="100%" />
                </div>
            )}
            {type === "recommendation" && (
                <div className={styles.imgWrapper}>
                    {/* <img
                        src={img}
                        className={styles.img}
                        loading="lazy"
                        alt={`Рекомендательное письмо от ${author}`}
                        title={`Рекомендательное письмо от ${author}`}
                    /> */}
                    <Image
                        src={img}
                        alt={`Рекомендательное письмо от ${author}`}
                        width={350}
                        height={500}
                        className={styles.img}
                        layout="responsive"
                        placeholder="blur"
                        blurDataURL={img}
                    />
                </div>
            )}

            {type === "text" && (
                <div className={styles.text}>
                    <span className={styles.quote}>“</span>
                    <p>{title}</p>
                </div>
            )}
            {renderAuthor()}
        </div>
    );
};

export default FeedbackCard;
