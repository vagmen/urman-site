import styles from "./FaqSection.module.css";
import classNames from "classnames";
import Link from "next/link";
import SectionHeader from "components/SectionHeader/SectionHeader";
import FaqList from "components/FaqList/FaqList";
import { IFaqList } from "interfaces";

const FaqSection = ({ list = [], className }: IFaqList) => {
    const link = "/faq";

    return list.length > 0 ? (
        <div className={classNames(styles.container, className)}>
            <SectionHeader title="Ответы на вопросы" className={styles.header} />
            <div className={styles.list}>
                <FaqList list={list} />
                {link && (
                    <Link href={link} passHref>
                        <a className={styles.link} href="">
                            Все ответы
                        </a>
                    </Link>
                )}
            </div>
        </div>
    ) : (
        <></>
    );
};

export default FaqSection;
