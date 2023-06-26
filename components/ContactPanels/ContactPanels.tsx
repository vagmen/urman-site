import styles from "./ContactPanels.module.css";
import classNames from "classnames";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import * as gtag from "lib/gtag";
import { useContext } from "react";
import HeaderContext from "contexts/HeaderContext";
import ym from "react-yandex-metrika";
import { ymTrigger } from "utils/ym";

const ContactPanels = () => {
    const { setVisible } = useContext(HeaderContext);
    return (
        <>
            <a
                href="tel:+79631363486"
                className={classNames(styles.btn, styles.phone, styles.showInDesktop)}
                title="Позвонить"
                onClick={() => {
                    // eslint-disable-next-line no-undef
                    // ym("reachGoal", "phoneHeader");
                    ymTrigger("phoneHeader");
                    gtag.event({
                        category: "phone",
                        action: "header",
                        label: "",
                        value: "",
                    });
                }}
            >
                +7(963)136-34-86
            </a>
            <a
                href="tel:+79631363486"
                className={classNames(styles.btn, styles.phone, styles.showInPhone)}
                title="Позвонить"
                onClick={() => {
                    // eslint-disable-next-line no-undef
                    // ym("reachGoal", "phoneHeader");
                    ymTrigger("phoneHeader");
                    gtag.event({
                        category: "phone",
                        action: "header",
                        label: "",
                        value: "",
                    });
                }}
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
                <a title="Telegram" href="tg://resolve?domain=URMANgroup_bot" className={styles.btn}>
                    <FaTelegramPlane className={styles.icon} color="#0088cc" />
                </a>
                <button
                    className={classNames(styles.btn, styles.callback)}
                    title="Заказать звонок"
                    onClick={() => setVisible(true)}
                >
                    Заказать звонок
                </button>
            </div>
        </>
    );
};

export default ContactPanels;
