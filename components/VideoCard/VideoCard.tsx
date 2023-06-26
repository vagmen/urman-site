import styles from "./VideoCard.module.css";
import classNames from "classnames";
import YouTubePlayer from "components/YouTubePlayer/YouTubePlayer";

interface IVideoCard {
    title: string;
    url: string;
    className?: string;
}

const VideoCard = ({ className, url, title }: IVideoCard) => (
    <div className={classNames(styles.card, className)}>
        <YouTubePlayer url={url} className={styles.video} alt={title} />
        <h4 className={styles.title}>{title}</h4>
    </div>
);

export default VideoCard;
