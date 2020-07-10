import styles from "./ContactPanels.module.css";
import classNames from "classnames";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";

const ContactPanels = ({ className, onOpenModal }) => {
    return (
        <>
            <a
                href="tel:+79631363486"
                className={classNames(styles.btn, styles.phone, styles.showInDesktop)}
                title="Позвонить"
                onClick={() => ym(51360247, "reachGoal", "tel1")}
            >
                +7(963)136-34-86
            </a>
            <a
                href="tel:+79631363486"
                className={classNames(styles.btn, styles.phone, styles.showInPhone)}
                title="Позвонить"
                onClick={() => ym(51360247, "reachGoal", "tel1")}
            >
                <MdLocalPhone className={styles.icon} color="#fff" />
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
                <button
                    className={classNames(styles.btn, styles.callback)}
                    title="Заказать звонок"
                    onClick={onOpenModal}
                >
                    Заказать звонок
                </button>
            </div>
        </>
    );
};

export default ContactPanels;
