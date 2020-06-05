import styles from "./FeedbackCard.module.css";
import classNames from "classnames";
import Author from "components/Author/Author";
import ReactPlayer from "react-player";

const FeedbackCard = ({ className, title, avatar, logo, author, company, img, type, videoUrl }) => {
    const renderAuthor = () => (
        <Author avatar={avatar} logo={logo} name={author} company={company} className={styles.author} />
    );
    return (
        <div className={classNames(className, styles.card)}>
            {type === "video" ? (
                <div className={styles.playerWrapper}>
                    <ReactPlayer url={videoUrl} className={styles.video} width="100%" height="100%" />
                </div>
            ) : (
                <>
                    <div className={styles.content}>
                        {title && (
                            <div className={styles.text}>
                                <span className={styles.quote}>“</span>
                                <p className={styles.title}>{title}</p>
                            </div>
                        )}
                        {renderAuthor()}
                    </div>
                    <div className={styles.imgWrapper}>
                        <img src={img} className={styles.img} />
                    </div>
                </>
            )}
        </div>
    );
};

export default FeedbackCard;
