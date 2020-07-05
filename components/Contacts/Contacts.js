import styles from "./Contacts.module.css";
import classNames from "classnames";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Contacts = ({ className }) => {
    return (
        <>
            <div className={classNames(styles.wrapper, className)}>
                <div className={styles.content}>
                    <a
                        href="tel:+79631363486"
                        className={classNames(styles.btn, styles.phone, styles.showInDesktop)}
                        title="Позвонить"
                    >
                        +7(963)136-34-86
                    </a>
                    <div className={styles.btns}>
                        <a
                            title="Whatsapp"
                            href="https://wa.me/79631363486"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.btn}
                        >
                            <FaWhatsapp className={styles.icon} color="#43d854" />
                        </a>
                        <a title="Telegram" href="tg://resolve?domain=urmansu" className={styles.btn}>
                            <FaTelegramPlane className={styles.icon} color="#0088cc" />
                        </a>
                    </div>
                    <a
                        href="tel:+79631363486"
                        className={classNames(styles.btn, styles.phone, styles.showInPhone)}
                        title="Позвонить"
                        onClick={() => ym(51360247, "reachGoal", "tel1")}
                    >
                        Позвонить
                    </a>
                </div>
            </div>
        </>
    );
};

export default Contacts;
