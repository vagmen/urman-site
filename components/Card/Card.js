import styles from "./Card.module.css";
import classNames from "classnames";
import Link from "next/link";

const Card = ({ className, title, as, href, img, extra }) => {
    const renderCardWithoutLink = () => (
        <div className={classNames(styles.card, className)}>
            <img src={img} alt={title} className={styles.img} loading="lazy" />
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
