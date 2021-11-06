import styles from "./Card.module.css";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";

interface ICard {
    title: string;
    img: string;
    as?: string;
    href?: string;
    extra?: string;
    className?: string;
}

const Card = ({ className, title, as, href, img, extra }: ICard) => {
    const renderCardWithoutLink = () => (
        <div className={classNames(styles.card, className)}>
            <div className={styles.imgWrapper}>
                <Image
                    src={img}
                    alt={title}
                    width={350}
                    height={200}
                    layout="responsive"
                    className={styles.img}
                    placeholder="blur"
                    blurDataURL={img}
                />
            </div>
            <div className={styles.content}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.extra}>{extra}</p>
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
