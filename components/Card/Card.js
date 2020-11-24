import styles from "./Card.module.css";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";

const Card = ({ className, title, as, href, img, extra }) => {
    const renderCardWithoutLink = () => (
        <div className={classNames(styles.card, className)}>
            {/* <img src={img} alt={title} className={styles.img} loading="lazy" /> */}
            <div className={styles.imgWrapper}>
                <Image src={img} alt={title} width={350} height={200} layout="responsive" className={styles.img} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <span className={styles.extra}>{extra}</span>
            </div>
        </div>
    );

    return as && href ? (
        <Link as={as} href={href} passHref>
            <a href="">{renderCardWithoutLink()}</a>
        </Link>
    ) : (
        renderCardWithoutLink()
    );
};

export default Card;
