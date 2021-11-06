import styles from "./Author.module.css";
import classNames from "classnames";
import Image from "next/image";

interface IAuthor {
    name: string;
    company?: string;
    avatar?: string;
    logo?: string;
    className?: string;
}

const Author = ({ name, company, avatar, logo, className }: IAuthor) => (
    <div className={classNames(styles.container, className)}>
        {(avatar || logo) && (
            <div className={styles.images}>
                <div className={styles.avatar}>
                    <Image
                        src={avatar || logo}
                        blurDataURL={avatar || logo}
                        alt={avatar ? name : company}
                        width={80}
                        height={80}
                        layout="responsive"
                        className={styles.img}
                        placeholder="blur"
                    />
                </div>
                {avatar && logo && (
                    <div className={styles.logo}>
                        <Image
                            src={logo}
                            alt={company}
                            width={40}
                            height={40}
                            layout="responsive"
                            className={styles.img}
                        />
                    </div>
                )}
            </div>
        )}
        <div className={styles.text}>
            <p className={styles.name}>{name}</p>
            <p className={styles.company}>{company}</p>
        </div>
    </div>
);

export default Author;
