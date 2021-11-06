import styles from "./VideoWrapper.module.css";
import classNames from "classnames";
import ReactPlayer from "react-player";

interface IVideoWrapper {
    url: string;
    className?: string;
}

const VideoWrapper = ({ url, className }: IVideoWrapper) => (
    <div className={classNames(styles.playerWrapper, className)}>
        <ReactPlayer url={url} width="100%" height="100%" className={styles.video} />
    </div>
);

export default VideoWrapper;
