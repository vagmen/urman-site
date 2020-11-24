import styles from "./Author.module.css";
import classNames from "classnames";
import Image from "next/image";

const Author = ({ name, company, avatar, logo, className }) => {
    return (
        <div className={classNames(styles.container, className)}>
            {(avatar || logo) && (
                <div className={styles.images}>
                    <div className={styles.avatar}>
                        <Image
                            src={avatar || logo}
                            alt={avatar ? name : company}
                            width={80}
                            height={80}
                            layout="responsive"
                            className={styles.img}
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
                <span className={styles.company}>{company}</span>
            </div>
        </div>
    );
};

export default Author;
