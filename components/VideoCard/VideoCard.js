import styles from "./VideoCard.module.css";
import classNames from "classnames";
import YouTubePlayer from "components/YouTubePlayer/YouTubePlayer";

const VideoCard = ({ className, url, title }) => {
    return (
        <div className={classNames(className, styles.card)}>
            <YouTubePlayer url={url} className={styles.video} />
            <h4 className={styles.title}>{title}</h4>
        </div>
    );
};

export default VideoCard;
