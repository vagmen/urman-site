import { Fragment } from "react";
import styles from "./We.module.css";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import { TiTree } from "react-icons/ti";
import YouTubePlayer from "components/YouTubePlayer/YouTubePlayer";
import Image from "next/image";

interface IStatistic {
    id: string;
    count: number;
    description: string;
}

interface IBenefit {
    id: string;
    description: string;
}

interface IWe {
    statistics: IStatistic[];
    whoAreWe: string;
    benefits: IBenefit[];
    className?: string;
    video?: string;
}

const We = ({ statistics, whoAreWe, benefits, className, video }: IWe) => {
    return (
        <div className={classNames(className, styles.we)}>
            <div className={styles.who}>
                <ReactMarkdown>{whoAreWe}</ReactMarkdown>
            </div>
            <div className={styles.stat}>
                <div className={styles.statGrid}>
                    {statistics.map((item) => (
                        <Fragment key={"count-" + item.id}>
                            <div className={styles.statNumber}>
                                <span>{item.count}</span>
                            </div>
                            <div className={styles.statText}>
                                <span>{item.description}</span>
                            </div>
                        </Fragment>
                    ))}
                </div>
                <div className={styles.bgWrapper}>
                    <Image
                        src="/images/bgStat.jpg"
                        blurDataURL="/images/bgStat.jpg"
                        className={styles.bg}
                        layout="fill"
                        placeholder="blur"
                        alt="Статистика"
                    />
                </div>
            </div>
            <YouTubePlayer
                url={video || "https://www.youtube.com/watch?v=Vm9iiVhUU9U"}
                alt="Постер ролика о нас"
                className={styles.playerWrapper}
            />
            <div className={styles.benefits}>
                {benefits.map((benefit) => (
                    <div className={styles.benefit} key={"benefit" + benefit.id}>
                        <TiTree className={styles.benefitIcon} size={40} />
                        <p className={styles.benefitText}>{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default We;
