import styles from "./CardNew.module.css";
import classNames from "classnames";
import Link from "next/link";

const CardNew = ({ className, title, as, href, img }) => {
    const renderCardWithoutLink = () => (
        <div className={classNames(styles.card, className)}>
            <img src={img} alt={title} className={styles.img} loading="lazy" />
            <div className={styles.colorFilter}> </div>
            <h3 className={styles.title}>{title}</h3>
            <button className={styles.action}>Подробнее</button>
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

export default CardNew;
