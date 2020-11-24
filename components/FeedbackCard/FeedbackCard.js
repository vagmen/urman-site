import styles from "./FeedbackCard.module.css";
import classNames from "classnames";
import Author from "components/Author/Author";
import ReactPlayer from "react-player";
import Image from "next/image";

const FeedbackCard = ({ className, title, avatar, logo, author, company, img, type, videoUrl }) => {
    const renderAuthor = () => (
        <Author avatar={avatar} logo={logo} name={author} company={company} className={styles.author} />
    );
    return (
        <div className={classNames(className, styles.card, { [styles.shadowCard]: type === "text" })}>
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
                    />
                </div>
            )}

            {type === "text" && (
                <div className={styles.text}>
                    <span className={styles.quote}>“</span>
                    <p className={styles.title}>{title}</p>
                </div>
            )}
            {renderAuthor()}
        </div>
    );
};

export default FeedbackCard;
